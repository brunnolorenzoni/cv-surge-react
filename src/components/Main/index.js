import React from 'react';
import ProfileSection from './ProfileSection'
import ResumeSection from './ResumeSection'
import RaitingsSection from './RaitingsSection'
import Grid from '@material-ui/core/Grid';

import './index.scss';


function Main() {
  return (
    <div className="mainWrapper">
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <ProfileSection />
        </Grid>
        <Grid item xs={12} md={9}>
          <ResumeSection />
          <RaitingsSection />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
