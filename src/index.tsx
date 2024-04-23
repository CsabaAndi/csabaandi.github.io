import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header  from './components/Header/Header';
import About from './components/About/MainPage'
import Footer from './components/Footer/Footer';
import Testt from './components/test/testt';
import img_test from './images/test2.jpg'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <div id='eh'>
          <div className='flex w-screen justify-center bg-cover bg-no-repeat sm:p-0 md:p-0' 
               style={{backgroundImage: `url(${img_test})`}}>           
            <div className='min-h-screen'><Testt /></div>
          </div>
        </div>
  </React.StrictMode>
);
/*
<Header />
    <About />
    <App />
    <Footer />
    */