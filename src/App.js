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
        <Route path="/" element={<Home language="ja" />} />
        <Route path="/works" element={<Works language="ja" />} />
        <Route path="/works/:slug" element={<WorksDetail language="ja" />} />
        <Route path="/about" element={<About language="ja" />} />
        <Route path="/en" element={<Home language="en" />} />
        <Route path="/en/works" element={<Works language="en" />} />
        <Route path="/en/works/:slug" element={<WorksDetail language="en" />} />
        <Route path="/en/about" element={<About language="en" />} />
      </Routes>
    </Router>

  );
}

export default App;
