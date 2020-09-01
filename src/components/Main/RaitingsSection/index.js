import React from 'react';
import CardRaiting from '../RaitingsSection/CardRaiting'
import Grid from '@material-ui/core/Grid';

import skills from '../../../data/skills.json'

function RaitingsSection() {
  
  return (
    <section className="raitingsSection">
      <h2 style={{"textAlign":"center"}}>Habilidades</h2>
      { skills.length ?
        <Grid container spacing={1}>
          {
            skills.map((skill, index) => 
              <Grid item xs={6} sm={4} key={`grid-card-${index}`}>
                <CardRaiting data={skill} key={`card-${index}`} />
              </Grid>
            )
          }
        </Grid>
      :
        null
      }
    </section>
  );
}

export default RaitingsSection;

