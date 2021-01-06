import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
// import ReactHtmlParser from 'react-html-parser';
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
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.headerImgSrc} imgAlt={this.props.headerImgAlt}/>
        <div className={styles.description}>
          {/* to samo rozwiązanie co dla Hero "{ReactHtmlParser(props.titleText)}" -- nie działa apka_15.5 parsowanie kodu HTML */}
          {this.props.description}
        </div>
        <div className={styles.columns}>
        {this.state.columns.map(({key, ...columnProps}) => (
          <Column key={key} {...columnProps} />
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
