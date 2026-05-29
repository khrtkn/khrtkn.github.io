import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// import './App.css';
import './style/styleguide.css';

const Home = lazy(() => import('./pages/Home'));
const Works = lazy(() => import('./pages/Works'));
const WorksDetail = lazy(() => import('./pages/WorksDetail'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="route-loading" />}>
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
      </Suspense>
    </Router>

  );
}

export default App;
