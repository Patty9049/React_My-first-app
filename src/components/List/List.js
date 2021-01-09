import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings, listData} from '../../data/dataStore';
import Creator from '../Creator/Creator';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    headerImgSrc: PropTypes.string,
    headerImgAlt: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  data(){
    console.log('this', this);
    console.log('this.state', this.state);
  }
  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.image} imgAlt={this.props.headerImgAlt}/>
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
        {this.state.columns.map(({key, ...columnProps}) => (
          <Column {...listData} key={key} {...columnProps} />
        ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  }
}

export default List;
