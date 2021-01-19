import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.node.isRequired,
    headerImgSrc: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imgSrc={image}/>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.columns}>
          {Object.values(columns).map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator action={addColumn} text={settings.columnCreatorText}/>
        </div>
      </section>
    );
  }
}

export default List;
