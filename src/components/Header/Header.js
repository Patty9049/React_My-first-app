import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class Header extends React.Component {
 
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to={settings.header.srcLogo} className={styles.logo}>
              <Icon name={settings.header.iconName} />
            </Link>
            <nav>
              <NavLink exact to={settings.header.srcHome} activeClassName={settings.header.classActive}>Home</NavLink>
              <NavLink exact to={settings.header.srcInfo} activeClassName={settings.header.classActive}>Info</NavLink>
              <NavLink exact to={settings.header.srcFAQ} activeClassName={settings.header.classActive}>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;