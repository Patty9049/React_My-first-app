import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData} from '../../data/dataStore';
import {settings} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={listData.title} imgSrc={listData.image} />
    <h2>{settings.FAQ.title}</h2>
    <p className={settings.FAQ.classParagraph1}>{settings.FAQ.paragraph1Content}</p>
    <p className={settings.FAQ.classParagraph2}>{settings.FAQ.paragraph2Content}</p>
    <p className={settings.FAQ.classParagraph3}>{settings.FAQ.paragraph3Content}</p>
    <p></p>
    <p></p>
  </Container>
);

export default FAQ;