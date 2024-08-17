// import React from 'react';
// import './End.css';

// const End = () => {
//     return (
//         <footer className="End">
//             <p>&copy;All is Well.</p>
//         </footer>
//     );
// };

// export default End;


import React from 'react';
import PropTypes from 'prop-types';
import './User.css'; // Importing CSS for styling

const User = ({ name, title, isOnline, skills }) => {
  return (
    <div className="user-card">
      <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'ONLINE' : 'OFFLINE'}
      </div>
      <div className="user-info">
        <img
          src="https://via.placeholder.com/150" // Placeholder for user image
          alt={`${name}'s profile`}
          className="user-image"
        />
        <h2 className="user-name">{name}</h2>
        <h4 className="user-title">{title}</h4>
        <div className="user-actions">
          <button className="message-btn">Message</button>
          <button className="follow-btn">Following</button>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default User;