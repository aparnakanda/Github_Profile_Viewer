import React from 'react';

function ProfileCard({ data }) {
  return (
    <div className="profile-card">
      <img src={data.avatar_url} alt="avatar" />
      <h2>{data.name || data.login}</h2>
      <p>📍 {data.location || 'Not specified'}</p>
      <p>📝 {data.bio || 'No bio available'}</p>
      <p>👥 {data.followers} Followers • {data.following} Following</p>
      <p>📁 {data.public_repos} Public Repos</p>
      <a href={data.html_url} target="_blank" rel="noreferrer">Visit Profile</a>
    </div>
  );
}

export default ProfileCard;
