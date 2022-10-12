import Contact from './Contact';
import News from './News';
import ContentHome from './ContentHome';
import { NavLink } from 'react-router-dom';

function ContentNavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {/* <Link to="news">Books</Link> */}
            <NavLink to="news">News</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* <Routes>
        <Route  path="/" element={<ContentHome />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default ContentNavBar;
