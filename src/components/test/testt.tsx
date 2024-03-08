import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/MainPage'

// border border-stone-900 base
// sm:border border border-rose-600 testing


function Testt(){
    return (

        <div id='main' className='flex flex-col grow min-h-full max-w-screen-xl items-start overflow-hidden border border-stone-900 bg-stone-900 sm:rounded-3xl'>
            <Header/>  
            <About/>               
            <Footer/>
        </div>    
                   
    );
}



export default Testt;