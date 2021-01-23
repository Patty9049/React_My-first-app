import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData} from '../../data/dataStore';
import {settings} from '../../data/dataStore';


const Info = () => {
  return (
    <Container>
      <Hero titleText={listData.title} imgSrc={listData.image} />
      <h2>{settings.info.title}</h2>
      <p>{settings.info.infoText}</p>
    </Container>
  );
};

export default Info;