import React from 'react';
import Container from './Container';
import Header from './Header';
import Span from './Span';
import Link from './Link';
import List from './List';
import ListItem from './ListItem';
import Image from './Image';

/** Контейнер блока новостей */
export default function ContainerFirst() {
  return (
    <Container className='container-first'>
      <Header className='container-first-header'>
        <List className="header-news-tabs" items={newsTabs}>
          {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
        </List>
      </Header>
      <Container className='teaser'>
        <List className="list" items={news}>
          {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
        </List>
        <Container className='teaser-content'>
          <Image src='https://motobrigade.co/wp-content/uploads/2019/03/Bo-Co-Gaming-Logo-100x100.png' width='70' height='70' className='teaser-logo' alt='teaser logo' />
          <Span title='Lorem ipsum dolor sit amet' />
          <Span title='Ut wisi enim ad minim veniam' />
        </Container>
      </Container>
    </Container>
  );
}

const news = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
];

const newsTabs = [
  'Сейчас в СМИ', 
  'В Германии', 
  'Рекомендуемое', 
  'Текущая дата'
];