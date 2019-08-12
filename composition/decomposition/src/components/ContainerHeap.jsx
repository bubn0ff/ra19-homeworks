import React from 'react';
import Container from './Container';
import Header from './Header';
import Span from './Span';
import Link from './Link';
import List from './List';
import ListItem from './ListItem';
import Image from './Image';

export default function ContainerSearch() {
  return (
    <Container className='container-heap'>
      <Container className='heap heap-first'>
        <div className='weather'>
          <Header className='container-first-header'>
            <Link href='#' title='Погода' />
          </Header>
          <div className='weather-content'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Pz3rw1OP0NBWPN9zgrBbeYHBrGZwrqLm9lYGEvo2B-qWOmZV-g' width='48' height='48' className='weather-logo' />
            <Span className='weather-temp' title='+16' />
            <Span className='weather-time' title='Вечером +13' />
          </div>
        </div>
        <div className='services'>
          <Header className='container-first-header'>
            <Link href='#' title='Посещаемое' />
          </Header>
          <List className="visited list" items={heap}>
            {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
          </List>
        </div>
      </Container>
      <Container className='heap heap-second'>
        <div className='map'>
          <Header className='container-first-header'>
            <Link href='#' title='Карта Германии' />
          </Header>
          <List className="list" items={map}>
            {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
          </List>
        </div>
        <div className='tv-program'>
          <Header className='container-first-header'>
            <Link href='#' title='Телепрограмма' />
          </Header>
          <List className="tv-content list" items={tv}>
            {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
          </List>
        </div>
      </Container>
      <Container className='heap heap-third'>
        <div className='ether'>
          <Header className='container-first-header'>
            <Link href='#' title='Эфир' />
          </Header>
          <List className="list" items={ether}>
            {items => items.map((item, index) => <ListItem key={index}><Link href='#' title={item} /></ListItem>)}
          </List>
        </div>
      </Container>
    </Container>
  );
}

const heap = [
  'Duis aute irure - dolor in reprehenderit', 
  'Duis aute irure - dolor in reprehenderit', 
  'Duis aute irure - dolor in reprehenderit'
];

const map = [
  'Такси', 
  'Расписание'
];

const tv = [
  'Время Название передачи Канал', 
  'Время Название передачи Канал', 
  'Время Название передачи Канал'
]

const ether = [
  'Иконка Название передачи Канал', 
  'Иконка Название передачи Канал', 
  'Иконка Название передачи Канал'
]