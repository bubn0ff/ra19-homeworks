import React from 'react';
import ServiceForm from './ServiceForm';

export default function ServiceCard({ match }) {

  return (
    <ServiceForm id={match.params.id} />
  );
}