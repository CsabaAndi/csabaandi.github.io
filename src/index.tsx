import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header  from './components/Sections/Header/Header';
import About from './components/Sections/About/Main_page'
import Footer from './components/Sections/Footer/Footer';
import Testt from './components/Sections/test/testt';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <div id='eh' style={{backgroundImage: `url("https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo=")`}}>
          <div className='flex min-h-screen w-screen justify-center bg-striped-background bg-cover bg-no-repeat p-0 sm:p-8'>
            <Testt />
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