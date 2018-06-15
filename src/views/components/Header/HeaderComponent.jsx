import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import ViewColumn from '@material-ui/icons/ViewColumn';
import ViewModule from '@material-ui/icons/ViewModule';
import styles from './HeaderComponentStyles';

const HeaderComponent = ({ classes, layout, toggleLayout }) => {
  const { root, flex } = classes;
  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={flex}>
            Scheduler
          </Typography>
          {
            layout === 'row'
              ? <IconButton color="inherit" onClick={() => toggleLayout('column')}>
                  <ViewModule />
                </IconButton>
              : <IconButton color="inherit" onClick={() => toggleLayout('row')}>
                  <ViewColumn />
                </IconButton>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

const { object, func, string } = PropTypes;
HeaderComponent.propTypes = {
  classes: object.isRequired,
  toggleLayout: func.isRequired,
  layout: string.isRequired
};

export default withStyles(styles)(HeaderComponent);