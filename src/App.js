import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import MainCategory from './components/MainCategory';
import BookContainer from './components/BookContainer';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookContainer />} exact />
      <Route path="/Category" element={<MainCategory />} exact />
    </Routes>
  </Router>
);

export default App;
