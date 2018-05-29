import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';
import extendStyles from './BufferedPaperStyles';

const theme = createMuiTheme();

const BufferedPaperComponent = ({ classes, children, background }) => {
  const { buffer } = classes;
  const combinedClasses = classNames(buffer, classes[background]);
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