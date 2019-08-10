import React from 'react';
import Card from './Card';
import CardBody from './CardBody';
import CardImg from './CardImg';

export default function Cards() {
  return (
    <div className='cards'>
      <Card>
        <CardImg src="https://monocler.ru/wp-content/uploads/2016/12/Gomer-240x240.jpg" name="homer"/>
        <CardBody title="Card title">
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button href="#">Go somewhere</button>
        </CardBody>
      </Card>

      <Card>
        <CardBody title="Special title treatment">
          <p>With supporting text below as a natural lead-in to additioal content.</p>
          <button href="#">Go somewhere</button>
        </CardBody>
      </Card>
    </div>
  );
}