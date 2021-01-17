import {connect} from 'react-redux';
import Card from './Card';

const mapStateToProps = (state) => ({
  cards: state.cards,
});

export default connect(mapStateToProps)(Card);