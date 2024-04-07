import Education from './Education'
import Projects from './Projects'
import AboutBottom from './AboutBottom'
import Thesis from './Thesis'
import BackToTop from '../BackToTop/Back'
import StackNew from './Stack/StackNew'

function About_main() {
    return (
        <div className='grow pb-6'>         
            <AboutBottom></AboutBottom>           
            <Education></Education>  
            <Thesis></Thesis>
            <Projects></Projects> 
            <StackNew></StackNew>
            <BackToTop></BackToTop>
        </div>
        )
}

export default About_main
