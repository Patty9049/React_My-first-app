import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
// import Column from '../Column/Column';
import {settings /* listData */} from '../../data/dataStore';
// import Creator from '../Creator/Creator';

class List extends React.Component {
  // state = {
  //   columns: this.props.columns || [],
  // }
  static propTypes = {
    title: PropTypes.node.isRequired,
    headerImgSrc: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  // addColumn(title){
  //   this.setState(state => (
  //     {
  //       columns: [
  //         ...state.columns,
  //         {
  //           key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
  //           title,
  //           icon: 'list-alt',
  //           cards: [],
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const {title, image, description} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imgSrc={image}/>
        <div className={styles.description}>
          {description}
        </div>
        {/* <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column {...listData} key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div> */}
      </section>
    );
  }
}

export default List;
