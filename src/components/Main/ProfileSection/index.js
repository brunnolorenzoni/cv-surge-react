import React from 'react';
import HeaderProfile from './HeaderProfile';
import ContactProfile from './ContactProfile';
import PersonalProfile from './PersonalProfile';
import SocialMediaProfile from './SocialMediaProfile';
import './index.scss';


function ProfileSection() {
  return (
    <section className="profileSection">
      <HeaderProfile />
      <ContactProfile />
      <PersonalProfile />
      <SocialMediaProfile />
    </section>
  );
}

export default ProfileSection;
