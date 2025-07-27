import React from 'react';

const ProfileCard = ({ user }) => {
  return (
     <div className="card">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.name || user.login}</h2>
      <p>📍 {user.location || 'Not specified'}</p>
      <p>📝 {user.bio || 'No bio available'}</p>
      <p>👥 {user.followers} Followers • {user.following} Following</p>
      <p>📁 {user.public_repos} Public Repos</p>
    </div>
  );
};

export default ProfileCard;
