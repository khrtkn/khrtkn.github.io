import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Works from './pages/Works';
import WorksDetail from './pages/WorksDetail';
import About from './pages/About';
// import './App.css';
import './style/styleguide.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:slug" element={<WorksDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
