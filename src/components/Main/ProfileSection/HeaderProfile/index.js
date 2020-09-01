import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import profileImage from '../../../../assets/profile.jpg'

function HeaderProfile() {
  return (
    <div className="headerProfile">
        <Avatar alt="Brunno Lorenzoni" src={profileImage} className="headerProfile__avatar" />
        <div className="headerProfile__description">
          <h2 className="headerProfile__description__name">Brunno Lorenzoni</h2>
          <h3 className="headerProfile__description__bio">Front-end Developer</h3>
        </div>
      </div>
  );
}

export default HeaderProfile;
