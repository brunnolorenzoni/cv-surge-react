import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "#212121"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar variant="dense">
          <h1 style={{fontSize: '20px', color: "white"}} title="CV Brunno Lorenzoni">CV Brunno Lorenzoni</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}