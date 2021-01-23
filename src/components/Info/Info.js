import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData} from '../../data/dataStore';


const Info = () => {
  return (
    <Container>
      <Hero titleText={listData.title} imgSrc={listData.image} />
      <h2>Info</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Container>
  );
};

export default Info;