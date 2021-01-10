import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import {settings, listData} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.node,
    key: PropTypes.number,
    icon: PropTypes.string,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span>
            <Icon name={this.props.icon} className={styles.icon}/>
          </span>
        </h3>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        <div className={styles.cards}>
          {this.state.cards.map(({key, title}) => (
            <Card {...listData} key={key} title={title}/>
          ))}
        </div>
      </section>
    );
  }
}

export default Column;