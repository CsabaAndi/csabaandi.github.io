import React from 'react'
import './Main_page.css'
import './Stack'
import Stack from './Stack'
import Education from './Education'
import Projects from './Projects'
import About_top from './About_top'
import About_bottom from './About_bottom'

function About_main() {
    return (
        <div className='w-full grow pb-6'>
            <About_top></About_top>
            <About_bottom></About_bottom>
            <Stack></Stack>
            <Education></Education>  
            <Projects></Projects>        
        </div>
        )
}

export default About_main