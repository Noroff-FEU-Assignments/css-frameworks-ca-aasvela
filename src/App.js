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

// function App() {
//   return <ContentHome />;
// }

// export default App;

// function App() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="news">Books</Link>
//           </li>
//           <li>
//             <Link to="contact">Bananas</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<ContentHome />} />
//         <Route path="news" element={<News />} />
//         <Route path="contact" element={<Contact />} />
//       </Routes>
//       <ContentHome />
//     </>
//   );
// }

// export default App;
