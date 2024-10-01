import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LolUpcomingTournaments.css';
import Navbar from './Navbar';

const LolUpcomingTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get('https://api.pandascore.co/lol/tournaments/upcoming', {
          headers: {
            Authorization: `Bearer 2_gNvl2m-yg3Ym-pisLvf8HJ-oRpLYLV2EL5DIT9CC88jf6Br4U`, // Replace with your actual API key
          },
        });
        setTournaments(response.data);
      } catch (err) {
        setError('Failed to fetch tournaments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  if (loading) return <div>Loading tournaments...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
    <div className="lol-upcoming-tournaments">
      <h2>Upcoming League of Legends Tournaments</h2>
      <div className="tournament-grid">
        {tournaments.length === 0 ? (
          <p>No upcoming tournaments available.</p>
        ) : (
          tournaments.map((tournament) => (
            <div key={tournament.id} className="tournament-item">
              <h3>{tournament.league.name}</h3>
              <img src={tournament.league.image_url} alt={tournament.league.name} />
              <p className="tournament-dates">
                <strong>Begin At:</strong> {new Date(tournament.begin_at).toLocaleString()}<br />
                <strong>End At:</strong> {new Date(tournament.end_at).toLocaleString()}
              </p>
              <h4>Matches:</h4>
              <ul>
                {tournament.matches.map((match) => (
                  <li key={match.id} className="match-item">
                    <div className="match-details">
                      <strong>{match.name}</strong> - {match.match_type} (Status: {match.status})<br />
                      <span>Scheduled At: {new Date(match.scheduled_at).toLocaleString()}</span>
                    </div>
                    <a className="live-link" href={match.live.url} target="_blank" rel="noopener noreferrer">
                      Watch Live
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default LolUpcomingTournaments;
