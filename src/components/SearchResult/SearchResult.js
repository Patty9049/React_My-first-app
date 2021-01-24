import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.scss';
import {SearchResultData} from '../../data/dataStore';
import Card from '../Card/CardContainer';
import Icon from '../Icon/Icon';

class SearchResult extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    key: PropTypes.number,
    icon: PropTypes.string,
    searchString: PropTypes.string,
  }
  static defaultProps = {
    title: SearchResultData.title,
    Icon: SearchResultData.icon,
  }
  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span>
            <Icon name={icon} className={styles.icon}/>
          </span>
        </h3>
        <div className={styles.cards}>
          {Object.values(cards).map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResult;