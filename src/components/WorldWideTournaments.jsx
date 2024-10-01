import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WorldWideTournaments.css';
import Navbar from './Navbar';

const WorldWideTournaments = () => {
  const [lolTournaments, setLolTournaments] = useState([]);
  const [owTournaments, setOwTournaments] = useState([]);
  const [valorantTournaments, setValorantTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const lolResponse = await axios.get('https://api.pandascore.co/lol/tournaments/upcoming', {
          headers: {
            Authorization: `Bearer 2_gNvl2m-yg3Ym-pisLvf8HJ-oRpLYLV2EL5DIT9CC88jf6Br4U`,
          },
        });
        setLolTournaments(lolResponse.data);

        const owResponse = await axios.get('https://api.pandascore.co/ow/tournaments/upcoming', {
          headers: {
            Authorization: `Bearer 2_gNvl2m-yg3Ym-pisLvf8HJ-oRpLYLV2EL5DIT9CC88jf6Br4U`,
          },
        });
        setOwTournaments(owResponse.data);

        const valorantResponse = await axios.get('https://api.pandascore.co/valorant/tournaments/upcoming', {
          headers: {
            Authorization: `Bearer 2_gNvl2m-yg3Ym-pisLvf8HJ-oRpLYLV2EL5DIT9CC88jf6Br4U`,
          },
        });
        setValorantTournaments(valorantResponse.data);
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
      <div className="merged-tournaments">

        {/* League of Legends Section */}
        <div className="tournament-section">
          <img src="/images/banners/leagueoflegendslogo.png" alt="League of Legends" className="game-banner" />
          <div className="tournament-grid">
            {lolTournaments.length === 0 ? (
              <p>No upcoming League of Legends tournaments available.</p>
            ) : (
              lolTournaments.map((tournament) => (
                <div key={tournament.id} className="tournament-item">
                  <h4>{tournament.league.name}</h4>
                  {tournament.league.image_url && (
                    <img src={tournament.league.image_url} alt={tournament.league.name} />
                  )}
                  <p><strong>Begin At:</strong> {new Date(tournament.begin_at).toLocaleString()}</p>
                  <p><strong>End At:</strong> {new Date(tournament.end_at).toLocaleString()}</p>

                  <h4>Matches:</h4>
                  <div className="matches">
                    {tournament.matches && tournament.matches.length > 0 ? (
                      tournament.matches.map((match) => (
                        <div key={match.id} className="match-container">
                          <h5>{match.name}</h5>
                          <p><strong>Type:</strong> {match.match_type} (Status: {match.status})</p>
                          <p><strong>Scheduled At:</strong> {new Date(match.scheduled_at).toLocaleString()}</p>

                          {/* Display team names and images */}
                          <div className="teams">
                            {match.opponents && match.opponents.map((team) => (
                              <div key={team.opponent.id} className="team-info">
                                {team.opponent.image_url && (
                                  <img src={team.opponent.image_url} alt={team.opponent.name} style={{ width: '50px', height: '50px' }} />
                                )}
                                <span>{team.opponent.name}</span>
                              </div>
                            ))}
                          </div>

                          {/* Display match streams */}
                          <h6>Watch Live:</h6>
                          {match.streams_list && match.streams_list.length > 0 ? (
                            match.streams_list.map((stream) => (
                              stream.raw_url ? (
                                <div key={stream.language} className="stream-info">
                                  <a href={stream.raw_url} target="_blank" rel="noopener noreferrer">
                                    {stream.language} Stream
                                  </a>
                                </div>
                              ) : null
                            ))
                          ) : (
                            <p>No streams available for this match.</p>
                          )}
                        </div>
                      ))
                    ) : (
                      <p>No matches available for this tournament.</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Overwatch Section */}
        <div className="tournament-section">
          <img src="/images/banners/overwatch2logo.png" alt="Overwatch" className="game-banner" />
          <div className="tournament-grid">
            {owTournaments.length === 0 ? (
              <p>No upcoming Overwatch tournaments available.</p>
            ) : (
              owTournaments.map((tournament) => (
                <div key={tournament.id} className="tournament-item">
                  <h4>{tournament.league.name}</h4>
                  {tournament.league.image_url && (
                    <img src={tournament.league.image_url} alt={tournament.league.name} />
                  )}
                  <p><strong>Begin At:</strong> {new Date(tournament.begin_at).toLocaleString()}</p>
                  <p><strong>End At:</strong> {new Date(tournament.end_at).toLocaleString()}</p>

                  <h4>Matches:</h4>
                  <div className="matches">
                    {tournament.matches && tournament.matches.length > 0 ? (
                      tournament.matches.map((match) => (
                        <div key={match.id} className="match-container">
                          <h5>{match.name}</h5>
                          <p><strong>Type:</strong> {match.match_type} (Status: {match.status})</p>
                          <p><strong>Scheduled At:</strong> {new Date(match.scheduled_at).toLocaleString()}</p>

                          {/* Display match streams */}
                          <h6>Watch Live:</h6>
                          {match.streams_list && match.streams_list.length > 0 ? (
                            match.streams_list.map((stream) => (
                              stream.raw_url ? (
                                <div key={stream.language} className="stream-info">
                                  <a href={stream.raw_url} target="_blank" rel="noopener noreferrer">
                                    {stream.language} Stream
                                  </a>
                                </div>
                              ) : null
                            ))
                          ) : (
                            <p>No streams available for this match.</p>
                          )}
                        </div>
                      ))
                    ) : (
                      <p>No matches available for this tournament.</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Valorant Section */}
        <div className="tournament-section">
          <img src="/images/banners/valorantlogo.png" alt="Valorant" className="game-banner" />
          <div className="tournament-grid">
            {valorantTournaments.length === 0 ? (
              <p>No upcoming Valorant tournaments available.</p>
            ) : (
              valorantTournaments.map((tournament) => (
                <div key={tournament.id} className="tournament-item">
                  <h4>{tournament.league.name}</h4>
                  {tournament.league.image_url && (
                    <img src={tournament.league.image_url} alt={tournament.league.name} />
                  )}
                  <p><strong>Begin At:</strong> {new Date(tournament.begin_at).toLocaleString()}</p>
                  <p><strong>End At:</strong> {new Date(tournament.end_at).toLocaleString()}</p>

                  <h4>Matches:</h4>
                  <div className="matches">
                    {tournament.matches && tournament.matches.length > 0 ? (
                      tournament.matches.map((match) => (
                        <div key={match.id} className="match-container">
                          <h5>{match.name}</h5>
                          <p><strong>Type:</strong> {match.match_type} (Status: {match.status})</p>
                          <p><strong>Scheduled At:</strong> {new Date(match.scheduled_at).toLocaleString()}</p>

                          {/* Display match streams */}
                          <h6>Watch Live:</h6>
                          {match.streams_list && match.streams_list.length > 0 ? (
                            match.streams_list.map((stream) => (
                              stream.raw_url ? (
                                <div key={stream.language} className="stream-info">
                                  <a href={stream.raw_url} target="_blank" rel="noopener noreferrer">
                                    {stream.language} Stream
                                  </a>
                                </div>
                              ) : null
                            ))
                          ) : (
                            <p>No streams available for this match.</p>
                          )}
                        </div>
                      ))
                    ) : (
                      <p>No matches available for this tournament.</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorldWideTournaments;
