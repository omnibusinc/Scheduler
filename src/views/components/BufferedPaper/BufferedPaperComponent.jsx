import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import extendStyles from './BufferedPaperStyles';

const theme = createMuiTheme();

const BufferedPaperComponent = ({ classes, children, background, align }) => {
  const { buffer } = classes;
  const combinedClasses = classNames(buffer, classes[background], classes[align]);
  return (
    <Paper className={ combinedClasses }>
      { children }
    </Paper>
  );
};

const { object, any, string } = PropTypes;
BufferedPaperComponent.propTypes = {
  classes: object.isRequired,
  children: any,
  background: string
};

const extendedStyles = extendStyles(theme);
export default withStyles(extendedStyles)(BufferedPaperComponent);