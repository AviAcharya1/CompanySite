import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// Lazy load components
const Home = React.lazy(() => import('./components/Home/Home'));
const About = React.lazy(() => import('./components/About/About'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound.jsx'));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;