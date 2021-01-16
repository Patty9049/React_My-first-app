import {connect} from 'react-redux';
import Card from './Card';
import createActionAddCard from '../../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  cards: state.cards,
});
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);