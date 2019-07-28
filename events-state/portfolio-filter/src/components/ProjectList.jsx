import React from 'react';

// Компонент для отображения отфильтрованных проектов (картинок)
export default function ProjectList(props) {
  const {projects} = props; // получили от Portfolio

  const renderProjects = (projects) => {
    return projects.map((project, i) => {
      return (
        <div className="project" key={`project-${project.category}-${i}`}>
          <img src={project.img} alt={`project-${project.category}-${i}`} />
        </div>
      );
    });
  };


  return (
    <div className="project-list">
      {/* { projects.map(el => <img src={el.img} alt={`project-${el.category + Math.random()}`} />) } */}
      {renderProjects(projects)}
    </div>
  )
}