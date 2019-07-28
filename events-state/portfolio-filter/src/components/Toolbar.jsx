import React from 'react';

// Компонент для отображения списка фильтров
// - принимает в качестве props список фильтров, активный фильтр и обработчик
export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          className={filter === selected ? "filter-selected" : "filter"}
          onClick={() => onSelectFilter(filter)}
          key={filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}