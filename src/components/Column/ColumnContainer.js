import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, id) => cards.filter(card => card.columnId == id);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);


// import {connect} from 'react-redux';
// import List from './List';

// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// const mapStateToProps = (state, props) => ({
//   columns: getColumnsForList(state, props.id),
// });

// export default connect(mapStateToProps)(List);