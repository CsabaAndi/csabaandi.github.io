import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header  from './components/Sections/Header/Header';
import About from './components/Sections/About/About'
import Footer from './components/Sections/Footer/Footer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <App />
    <Footer />
  </React.StrictMode>
);

