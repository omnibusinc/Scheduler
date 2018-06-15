import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BufferedPaper from '../BufferedPaper';
import styles from './InstructionsComponentStyles';

const InstructionsComponent = ({ classes }) => {
  const { root, buffer } = classes;

  return (
    <Grid container className={ root } spacing={16}>
      <Grid item xs={12}>
        <BufferedPaper>
          <div>Welcome to the Scheduler.</div>
          <div>
            To reserve your slot, click on a time below, and enter your name and phone number.
          </div>
          <div>
            Slots in red have already been reserved.
          </div>
        </BufferedPaper>
      </Grid>
    </Grid>
  );
};

const { object } = PropTypes;
InstructionsComponent.propTypes = {
  classes: object.isRequired
};

export default withStyles(styles)(InstructionsComponent);