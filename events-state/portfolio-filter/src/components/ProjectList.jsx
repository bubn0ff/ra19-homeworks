import React from 'react';

// Компонент для отображения отфильтрованных проектов (картинок)
export default function ProjectList(props) {
  const {projects} = props;

  return (
    <div className="portfolio">
      {projects.map((project, i) => (
        <img src={project.img} alt={`project-${project.category}-${i}`} />
      ))}
    </div>
  );
}