import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Activision from "./components/Activision";
import Ea from "./components/Ea";
import Guideslist from "./components/Guideslist";
import Home from "./components/Home";
import Valve from "./components/Valve";
import Riot from "./components/Riot";
import Epic from "./components/Epic";
import Apexlegends from "./components/guides/Apexlegends";
import Callofdutywarzone from "./components/guides/Callofdutywarzone";
import Counterstrike2 from "./components/guides/Counterstrike2";
import Fortnite from "./components/guides/Fortnite";
import Leagueoflegends from "./components/guides/Leagueoflegends";
import Overwatch2 from "./components/guides/Overwatch2";
import Rainbowsixsiege from "./components/guides/Rainbowsixsiege";
import Rocketleague from "./components/guides/Rocketleague";
import Valorant from "./components/guides/Valorant";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from './components/Profile';
import Forum from './components/Forum';
import CreateTournamentForm from './components/CreateTournamentForm';
import LolUpcomingTournaments from './components/LolUpcomingTournaments';
import WorldWideTournaments from './components/WorldWideTournaments';

function App() {
  return (
    <Router>
      <div className='App'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guideslist" element={<Guideslist />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/activision" element={<Activision />} />
          <Route path="/ea" element={<Ea />} />
          <Route path="/valve" element={<Valve />} />
          <Route path="/riot" element={<Riot />} />
          <Route path="/epicgames" element={<Epic />} />
          <Route path="/guides/apexlegends" element={<Apexlegends />} />
          <Route path="/guides/call-of-duty-warzone" element={<Callofdutywarzone />} />
          <Route path="/guides/counter-strike-2" element={<Counterstrike2 />} />
          <Route path="/guides/fortnite" element={<Fortnite />} />
          <Route path="/guides/league-of-legends" element={<Leagueoflegends />} />
          <Route path="/guides/overwatch-2" element={<Overwatch2 />} />
          <Route path="/guides/rainbow-six-siege" element={<Rainbowsixsiege />} />
          <Route path="/guides/rocket-league" element={<Rocketleague />} />
          <Route path="/guides/valorant" element={<Valorant />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />    
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/tournaments" element={<CreateTournamentForm />} /> 
          <Route path="/league-of-legends" element={<LolUpcomingTournaments />} /> 
          <Route path="/worldwide-tournaments" element={<WorldWideTournaments />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
