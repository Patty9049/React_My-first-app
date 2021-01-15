import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Card from '../Card/CardContainer';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.node,
    key: PropTypes.number,
    icon: PropTypes.string,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {title, icon, cards} = this.props;
    console.log('this.props-column', this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span>
            <Icon name={icon} className={styles.icon}/>
          </span>
        </h3>
        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div> */}
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default Column;