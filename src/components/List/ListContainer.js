import {connect} from 'react-redux';
import List from './List';
import getColumnsForList  from '../../../redux/columnsRedux';
import createActionAddColumn from '../../../redux/columnsRedux';

const mapStateToProps = ({columns}, props) => ({
  columns: getColumnsForList(columns, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: columns => dispatch(createActionAddColumn({
    listId: props.id,
    title: columns.title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);