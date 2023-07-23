import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About_main'

function Testt(){
    return (

                    <div className='flex min-h-full w-full max-w-screen-xl grow flex-col items-start overflow-hidden border border-stone-900 bg-stone-900 shadow-strong sm:rounded-3xl animate-page-in'>
                    <Header/>  
                    <About/>               
                    <Footer/>
                    </div>    
                   
        );
}



export default Testt;