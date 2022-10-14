import './sass/style.scss';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContentHome from './compontents/ContentHome';
import Contact from './compontents/Contact';
import News from './compontents/News';
import ContentNavBar from './compontents/ContentNavBar';

function App() {
  return (
    <>
      <ContentNavBar />
      <Routes>
        <Route exact path="/" element={<ContentHome />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
