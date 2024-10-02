import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UpcomingTournaments.css';

const gameImageMap = {
  'League of Legends': 'leagueoflegends.png',
  'Valorant': 'valorant.png',
  'Fortnite': 'fortnite.png',
  'Call of Duty Warzone': 'callofdutywarzone.png',
  'Apex Legends': 'apexlegends.png',
  'Overwatch 2': 'overwatch2.png',
  'Rocket League': 'rocketleague.png',
  'Counter-Strike 2': 'counterstrike2.png',
  'Rainbow Six Siege': 'rainbowsixsiege.png',
};

const UpcomingTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [organizer, setOrganizer] = useState(''); // State to hold the organizer's name

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tournaments');
        const sortedTournaments = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setTournaments(sortedTournaments);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError('Failed to fetch tournaments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile', { withCredentials: true });
        setOrganizer(response.data.name); // Set the current user's name as the organizer
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this tournament?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/tournaments/${id}`, {
          data: { organizer }, // Send the organizer in the request body
        });
        if (response.status === 200) {
          setTournaments((prev) => prev.filter(tournament => tournament._id !== id));
          alert('Tournament deleted successfully!');
        }
      } catch (err) {
        console.error('Error during deletion:', err.response ? err.response.data : err.message);
        alert('Failed to delete tournament. Please try again later.');
      }
    }
  };
  
  if (loading) return <div>Loading tournaments...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="upcoming-tournaments">
      <h2 id='title'>Upcoming Tournaments</h2>
      <div className="tournament-grid">
        {tournaments.length === 0 ? (
          <p>No upcoming tournaments available.</p>
        ) : (
          tournaments.map((tournament) => (
            <div key={tournament._id} className="tournament-item">
              <img
                src={`/images/banners/${gameImageMap[tournament.game] || 'default.png'}`}
                alt={`${tournament.game} banner`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/banners/default.png'; // Fallback image
                }}
              />
              <h3>{tournament.name}</h3>
              <p>Game: {tournament.game}</p>
              <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
              <p>Time: {tournament.time}</p>
              <p>Organizer: {tournament.organizer}</p>
              <p>Prize Pool: {tournament.prizePool} DT</p>
              <p>Teams:</p>
              <ul>
                {tournament.teams.map((team, index) => (
                  <li key={index}>{team}</li>
                ))}
              </ul>
              {/* Add the delete button here */}
              <button onClick={() => handleDelete(tournament._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingTournaments;
