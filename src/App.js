import './sass/style.scss';
import ContentNavBar from './compontents/ContentNavBar';
import ContentHome from './compontents/ContentHome';
import ContentTabs from './compontents/ContentTabs';

function App() {
  return (
    <div>
      <ContentNavBar />
      <ContentHome />
      <ContentTabs />
    </div>
  );
}

export default App;
