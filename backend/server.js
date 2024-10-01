const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const fs = require('fs');       
const path = require('path');   
const multer = require('multer'); 

// Rest of your code...
			

require("dotenv").config();

const app = express();
const Tournament = require('./models/Tournament');



app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});

app.use('/uploads', express.static('uploads'));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        collectionName: 'sessions',
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
    },
}));


const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = path.join(__dirname, 'uploads');
      fs.access(dir, fs.constants.F_OK, (err) => {
        if (err) {
          fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) {
              cb(new Error('Failed to create directory'), null);
            } else {
              cb(null, dir);
            }
          });
        } else {
          cb(null, dir);
        }
      });
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  }
});


  // ==========================
//  Tournament API Route
// ==========================


app.post('/api/tournaments', async (req, res) => {
  try {
    const { name, game, date, time, teams, prizePool, organizer } = req.body;

    if (!name || !game || !date || !time || !teams || !prizePool || !organizer) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newTournament = new Tournament({
      name,
      game,
      date: new Date(date), t
      time,
      teams,
      prizePool,
      organizer
    });

    await newTournament.save();

    res.status(201).json({ message: 'Tournament created successfully' });
  } catch (error) {
    console.error('Error creating tournament:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/api/tournaments', async (req, res) => {
  try {

    const tournaments = await Tournament.find().sort({ date: 1 });
    
    res.json(tournaments);
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/api/tournaments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { organizer } = req.body; 

    const tournament = await Tournament.findById(id);

    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }

    if (tournament.organizer !== organizer) {
      return res.status(403).json({ message: 'You are not authorized to delete this tournament' });
    }

    await Tournament.findByIdAndDelete(id);
    res.status(200).json({ message: 'Tournament deleted successfully' });
  } catch (error) {
    console.error('Error deleting tournament:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



/* ==========================
    User Authentication Routes
========================== */

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }
  return res.status(401).json({ msg: "Unauthorized" });
};

app.post("/signup", async (req, res) => {
    const { name, email, password, dob } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword, dob });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      req.session.user = { id: user._id, email: user.email, name: user.name };
      res.json({ msg: "Login successful", user: { name: user.name, email: user.email } });
    } catch (err) {
      res.status(500).send("Server error");
    }
  });
  
app.get("/profile", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.put('/profile', async (req, res) => {
  try {
      const { bio, favoriteGames } = req.body;
      const updatedUser = await User.findByIdAndUpdate(req.user.id, { bio, favoriteGames }, { new: true });
      res.json(updatedUser);
  } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).send('Server Error');
  }
});
  
  app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ msg: "Failed to log out" });
      res.clearCookie("connect.sid");
      res.sendStatus(200);
    });
  });

  
  app.get('/profile', isAuthenticated, (req, res) => {
    res.json({ name: req.session.user.email });
  });
/* ==========================
   Server Setup
========================== */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});