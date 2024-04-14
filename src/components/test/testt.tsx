import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/MainPage'
import BackToTop from '../BackToTop/Back';

// border border-stone-900 base
// sm:border border border-rose-600 testing


function Testt(){
    return (
        <div id='main' className='flex flex-col max-w-screen-2xl 2xl:max-w-screen-xl 2xl:m-8 items-start overflow-hidden border border-stone-900 bg-stone-900 2xl:rounded-3xl'>
            <Header/>  
            <About/>               
            <Footer/>
            <BackToTop></BackToTop>
        </div>    
                   
    );
}

export default Testt;