import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    changeSearchString: PropTypes.func,
  }
  render() {
    const {lists, title, subtitle, changeSearchString} = this.props;
    return (
      <div id='home'>
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Search action={changeSearchString}/>
          {/* < List {...listData}/> */}
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </main>
      </div>
    );
  }
}

export default Home;
