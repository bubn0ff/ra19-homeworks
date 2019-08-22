import React from 'react';
import VideoList from './components/Toolbox';

export default function App() {
  return (
    <VideoList list={list} />
  );
}

const list = [
  {
    url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2017-07-31 13:24:00'
  },
  {
    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2016-03-03 12:10:00'
  },
  {
    url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2015-02-03 23:16:00'
  },
  {
    url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2019-08-18 12:10:00'
  },
  {
    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2019-08-20 10:17:00'
  },
  {
    url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2019-08-21 16:00:00'
  }
];