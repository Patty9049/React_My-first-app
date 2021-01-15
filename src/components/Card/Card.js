import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    columnId: PropTypes.string,
    title: PropTypes.string,
  }
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3>{title}</h3>
      </section>
    );
  }
}

export default Card;
