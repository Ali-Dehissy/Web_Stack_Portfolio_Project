import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateTournamentForm.css';
import Navbar from './Navbar';

const CreateTournamentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    game: '',
    date: '',
    time: '',
    teams: [''],
    prizePool: '',
    organizer: '', 
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile', { withCredentials: true });
        setFormData((prev) => ({ ...prev, organizer: response.data.name })); 
      } catch (error) {
        navigate('/login'); 
      }
    };

    checkLoggedInUser();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTeamsChange = (index, value) => {
    const newTeams = [...formData.teams];
    newTeams[index] = value;
    setFormData({ ...formData, teams: newTeams });
  };

  const addTeam = () => {
    setFormData({ ...formData, teams: [...formData.teams, ''] });
  };

  const handleGameSelect = (game) => {
    setFormData({ ...formData, game });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/tournaments', formData);
      setSuccessMessage('Tournament created successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error creating tournament:', error);
    }
  };
  

  const gameOptions = [
    { name: 'League of Legends', img: '/images/banners/leagueoflegends.png' },
    { name: 'Valorant', img: '/images/banners/valorant.png' },
    { name: 'Fortnite', img: '/images/banners/fortnite.png' },
    { name: 'Call of Duty Warzone', img: '/images/banners/callofdutywarzone.png' },
    { name: 'Apex Legends', img: '/images/banners/apexlegends.png' },
    { name: 'Overwatch 2', img: '/images/banners/overwatch2.png' },
    { name: 'Rocket League', img: '/images/banners/rocketleague.png' },
    { name: 'Counter-Strike 2', img: '/images/banners/counterstrike2.png' },
    { name: 'Rainbow Six Siege', img: '/images/banners/rainbowsixsiege.png' },
  ];

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className='title'>Create a Tournament</h2>

          {successMessage && <div className="success-message">{successMessage}</div>}

          <label>Tournament Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Choose Game</label>
          <div className="game-options">
            {gameOptions.map((game, index) => (
              <img
                key={index}
                src={game.img}
                alt={game.name}
                className={`game-banner ${formData.game === game.name ? 'selected' : ''}`}
                onClick={() => handleGameSelect(game.name)}
              />
            ))}
          </div>

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label>Teams</label>
          {formData.teams.map((team, index) => (
            <div key={index}>
              <input
                type="text"
                value={team}
                onChange={(e) => handleTeamsChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addTeam}>
            Add Team
          </button>

          <label>Prize Pool</label>
          <input
            type="number"
            name="prizePool"
            value={formData.prizePool}
            onChange={handleChange}
            required
          />

          <label>Organizer</label>
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            readOnly
          />

          <button type="submit">Create Tournament</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTournamentForm;
