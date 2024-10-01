import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import Navbar from './Navbar';

const allGames = [
  { name: 'League of Legends', image: '/images/banners/leagueoflegends.png' },
  { name: 'Valorant', image: '/images/banners/valorant.png' },
  { name: 'Apex Legends', image: '/images/banners/apexlegends.png' },
  { name: 'Rocket League', image: '/images/banners/rocketleague.png' },
  { name: 'Rainbow Six Siege', image: '/images/banners/rainbowsixsiege.png' },
  { name: 'Counter Strike 2', image: '/images/banners/counterstrike2.png' },
  { name: 'Warzone', image: '/images/banners//callofdutywarzone.png' },
  { name: 'Fortnite', image: '/images/banners/fortnite.png' },
  { name: 'Overwatch 2', image: '/images/banners/overwatch2.png' }
];

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
    favoriteGames: []
  });

  const [formData, setFormData] = useState({
    bio: '',
    profilePicture: null,
    favoriteGames: []
  });

  useEffect(() => {
    axios.get('http://localhost:3001/profile', { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
        setFormData({ bio: response.data.bio, profilePicture: null, favoriteGames: response.data.favoriteGames || [] });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleGameToggle = (game) => {
    setFormData(prevFormData => {
      const newFavoriteGames = prevFormData.favoriteGames.includes(game)
        ? prevFormData.favoriteGames.filter(favGame => favGame !== game)
        : [...prevFormData.favoriteGames, game];

      return {
        ...prevFormData,
        favoriteGames: newFavoriteGames
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    dataToSend.append('bio', formData.bio);
    if (formData.profilePicture) {
      dataToSend.append('profilePicture', formData.profilePicture);
    }
    dataToSend.append('favoriteGames', JSON.stringify(formData.favoriteGames));

    try {
      const response = await axios.put('http://localhost:3001/profile', dataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='profile-container'>
        <div className='profile-info'>
          <img src={`http://localhost:3001/uploads/${userData.profilePicture}`} alt="Profile" className='profile-picture' />
          <p className='profile-name'>{userData.name}</p>
          <p className='profile-email'>{userData.email}</p>
          <p>{userData.bio}</p>
          <div className='favorite-games'>
            <h3 className='favorite-games-title'>Favorite Games</h3>
            <div className='games-container'>
              {allGames.map((game) => (
                <div
                  key={game.name}
                  className={`game-item ${formData.favoriteGames.includes(game.name) ? 'selected' : ''}`}
                  onClick={() => handleGameToggle(game.name)}
                >
                  <img src={game.image} alt={game.name} className='game-image' />
                  <span className={`icon ${formData.favoriteGames.includes(game.name) ? 'icon-selected' : 'icon-unselected'}`}>
                    {formData.favoriteGames.includes(game.name) ? '❤️' : '🤍'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div className='form-group'>
            <label className='bio-title'>Bio</label>
            <div className="textarea-container">
  <textarea
    name="bio"
    className="stylish-textarea"
    value={formData.bio}
    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
    rows="4"
  />
</div>
          </div>
          <div className='form-group'>
            <label className='profile-picture'>Update Profile Picture</label>
            <input
              type='file'
              name='profilePicture'
              onChange={(e) => setFormData({ ...formData, profilePicture: e.target.files[0] })}
            />
          </div>
          <button type='submit' className='btn save-btn'>Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
