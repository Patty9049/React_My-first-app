import {connect} from 'react-redux';
import SearchResult from './SearchResult';

const mapStateToProps = ({cards, searchString}) => ({
  cards: cards.filter(card => new RegExp(searchString, 'i').test(card.title)),
});

export default connect(mapStateToProps)(SearchResult);