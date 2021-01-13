import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {lists, title, subtitle} = this.props;
    return (
      <div id='app'>
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {/* < List {...listData}/> */}
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
