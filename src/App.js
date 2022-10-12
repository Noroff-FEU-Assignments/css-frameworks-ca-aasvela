import './sass/style.scss';
import ContentHome from './compontents/ContentHome';
import Contact from './compontents/Contact';
import News from './compontents/News';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
// function App() {
//   return <ContentHome />;
// }

// export default App;
