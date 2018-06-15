import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './HeaderComponentStyles';

const HeaderComponent = ({ classes }) => {
  const { root, flex } = classes;
  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={flex}>
            Scheduler
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const { object } = PropTypes;
HeaderComponent.propTypes = {
  classes: object.isRequired
};

export default withStyles(styles)(HeaderComponent);