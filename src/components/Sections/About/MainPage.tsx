import React from 'react'
import Stack from './Stack/Stack'
import Education from './Education'
import Projects from './Projects'
import AboutTop from './AboutTop'
import AboutBottom from './AboutBottom'
import Pop from '../Popup/PopupWindow'
import Thesis from './Thesis'
import BackToTop from '../BackToTop/Back'
import Hardware from '../Hardware/HomeEnv'

function About_main() {
    return (
        <div className='w-full grow pb-6'>
            {/*<AboutTop></AboutTop>*/}            
            <AboutBottom></AboutBottom>
            <Hardware></Hardware>
            <Stack></Stack>
            <Education></Education>  
            <Thesis></Thesis>
            <Projects></Projects> 
            <BackToTop></BackToTop>
        </div>
        )
}

export default About_main
