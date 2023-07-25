import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/Main_page'

function Testt(){
    return (

                    <div id='main' className='flex min-h-full w-full max-w-screen-xl grow flex-col items-start overflow-hidden border border-stone-900 bg-stone-900 shadow-strong sm:rounded-3xl animate-page-in'>
                    <Header/>  
                    <About/>               
                    <Footer/>
                    </div>    
                   
        );
}



export default Testt;