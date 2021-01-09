import React from "react";
import PropTypes from 'prop-types';
import styles from "./Card.scss";
import {settings} from '../../data/dataStore';

class Card extends React.Component {
  state = {
    key: this.props.key,
    title: this.props.title,
  }
  static propTypes = {
    key: PropTypes.number,
    title: PropTypes.string,
  }
  render() {
    return (
      <section className={styles.component}>
        <h3>{this.state.title}</h3>
      </section>
    );
  }
}

export default Card;
