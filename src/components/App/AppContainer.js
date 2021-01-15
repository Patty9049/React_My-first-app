import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  columns: state.columns,
  cards: state.cards,
});

export default connect(mapStateToProps)(App);