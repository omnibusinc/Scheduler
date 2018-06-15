import basicStyles from '../../../styles/app';
const styles = Object.assign({}, basicStyles);

const extendStyles = (theme) => (
  Object.assign({}, {
    buffer: theme.mixins.gutters({
      padding: 20,
      fontSize: 18
    }),
    red: {
      backgroundColor: '#ba000d',
      color: theme.palette.common.white
    },
    center: {
      textAlign: 'center'
    }
  })
);

export default extendStyles;