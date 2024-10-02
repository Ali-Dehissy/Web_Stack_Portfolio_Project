import React from 'react';
import './Forum.css'; 
import Navbar from './Navbar';

const Forum = () => {
  return (
    <div>
        <Navbar />
    <div className="forum-container">
      <h2 className="forum-title">Forum Chat Room</h2>
      <iframe
        src="https://tlk.io/Esports_Champions"
        className="forum-iframe"
        title="Forum Chat Room"
        allow="microphone; camera"
      ></iframe>
    </div>
    </div>
  );
};

export default Forum;
