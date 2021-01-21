import {connect} from 'react-redux';
import App from './App';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  columns: state.columns,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: () => dispatch(createAction_changeSearchString({
    payload: {},
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);