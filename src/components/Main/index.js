import React, { useState, useEffect } from 'react';
import ProfileSection from './ProfileSection'
import ResumeSection from './ResumeSection'
import RaitingsSection from './RaitingsSection'
import Grid from '@material-ui/core/Grid';

import './index.scss';

import data from '../../data/git.json'

function Main() {

  const [repos, setRepos] = useState([]);

  // useEffect(()=> {
  //   fetch('https://api.github.com/users/brunnolorenzoni/repos?type=owner').then(response => response.json()).then(data => setRepos(data))
  // }, [])

  useEffect(()=> {
    setRepos(data)
  }, [])

  useEffect(()=> {
    console.log(repos)
  }, [repos])

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
