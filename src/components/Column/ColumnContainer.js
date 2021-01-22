import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn} from '../../redux/cardsRedux';
import {createActionAddCard} from '../../redux/cardsRedux';

const mapStateToProps = ({cards, searchString}, props) => ({
  cards: getCardsForColumn(cards, props.id, searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);