import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import nanoid from 'nanoid';

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  );
}

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} title={`frame${nanoid()}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

export default function VideoList(props) {
  return props.list.map(item => 
    <Video url={item.url} date={item.date} />
  );
}

function PrettyComponent(Component, prettyMaker) {
  return class extends React.Component {
    render() {
      return (
        <Component {...this.props} {...prettyMaker(this.props)} />
      );
    }
  };
}

// Отображает, сколько прошло времени от указанной даты и до текущего момента
function changeDate(props) {
  const date = moment(props.date);
  const prettyDate = date.fromNow();
  return {...props, date: prettyDate};
}

const DateTimePretty = PrettyComponent(DateTime, changeDate);