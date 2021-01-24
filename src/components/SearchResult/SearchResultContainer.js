import {connect} from 'react-redux';
import SearchResult from './SearchResult';

const mapStateToProps = ({cards}, props) => {
  const searchStringURL = props.match.params.searchstring;
  const filteredCards = cards.filter(card => new RegExp(searchStringURL, 'i').test(card.title));
  const resultParams = filteredCards || {};

  return {
    ...filteredCards,
    cards: resultParams.filter(card => new RegExp(searchStringURL, 'i').test(card.title)),
  };
};

export default connect(mapStateToProps)(SearchResult);