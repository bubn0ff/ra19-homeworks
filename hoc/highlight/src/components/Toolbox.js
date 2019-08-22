import React from 'react';
import nanoid from 'nanoid';

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

function Article(props) {
  return (
    <div className="item item-article">
      <h3><a href="/#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url} 
        title={`frame${nanoid()}`} 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
      />
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return <BestVideo key={nanoid()} {...item} />;

      case 'article':
        return <BestArticle key={nanoid()} {...item} />;

      default: 
        return null;
    }
  });
}

const BestVideo = WrapRating(Video);
const BestArticle = WrapRating(Article);

// Обёртка для рейтинговых компонентов
function WrapRating(InnerComponent) {
  return function(props) {
    let OuterComponent;

    if (props.views >= 100) {
      OuterComponent = New;
    } 
    
    if (props.views >= 1000) {
      OuterComponent = Popular;
    }
    
    return OuterComponent ? OuterComponent({...props, children: InnerComponent(props)}) : InnerComponent(props);
  };
}