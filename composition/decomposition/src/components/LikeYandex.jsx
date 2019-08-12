import React from 'react';
import Container from './Container';
import ContainerFirst from './ContainerFirst';
import ContainerSearch from './ContainerSearch';
import ContainerHeap from './ContainerHeap';

export default function LikeYandex() {
  return (
    <div className="main">
      <Container className='container'>
        <ContainerFirst />
      </Container>

      <Container className='container'>
        <ContainerSearch />
      </Container>

      <Container className='container'>
        <ContainerHeap />
      </Container>
    </div>
  );
}