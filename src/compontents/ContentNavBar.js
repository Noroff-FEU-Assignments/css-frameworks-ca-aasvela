import Contact from './Contact';
import News from './News';
import ContentHome from './ContentHome';
import { Link, Router, Routes } from 'react-router-dom';

function ContentNavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="news">Books</Link>
          </li>
          <li>
            <Link to="contact">Bananas</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Router path="/" element={<ContentHome />} />
        <Router path="news" element={<News />} />
        <Router path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default ContentNavBar;
