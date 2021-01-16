import {connect} from 'react-redux';
import Column from './Column';
import getCardsForColumn from '../../../redux/cardsRedux';
import createActionAddCard from '../../../redux/cardsRedux';

const mapStateToProps = ({cards}, props) => ({
  cards: getCardsForColumn(cards, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddCard({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);