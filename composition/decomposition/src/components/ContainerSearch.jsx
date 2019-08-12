import React from 'react';
import Container from './Container';
import Span from './Span';
import Link from './Link';
import List from './List';
import ListItem from './ListItem';
import Image from './Image';
import Input from './Input';

/** Контейнер блока поиска */
export default function ContainerSearch() {
  return (
    <Container className='container-search'>
      <Container className='search-logo'>
        <Image src='https://yastatic.net/s3/home-static/_/_/i/tLI86LIriNsIJwhEqZS2o1Ckk.webp' className='yandex-logo' alt='yandex logo' />
      </Container>
      <Container className='container-search-main'>
        <Container className='home-tabs'>
          <List className="list" items={searchTabs}>
            {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
          </List>
        </Container>
        <Container className='home-input'>
          <Input type='text' size='120' className='input-search' />
          <Container className='home-input-btn' title='Найти' />
        </Container>
        <Container className='home-promo'>
          <Span className='home-promo-first' title='Найдётся всё. Даже то, что вам триста лет не нужно было' />
          <Span className='home-promo-second' title='Скачайте какую-то ненужную вам программу' />
        </Container>
        <Image src='https://artplantaetoday.files.wordpress.com/2013/07/cre8time-webbanner-830x90.jpg?w=830' className='home-promo-ad' />
      </Container>
    </Container>
  );
}

const searchTabs = [
  'Видео', 
  'Картинки', 
  'Новости', 
  'Карты', 
  'Маркет', 
  'Переводчик', 
  'Музыка', 
  'Эфир', 
  'ещё'
];