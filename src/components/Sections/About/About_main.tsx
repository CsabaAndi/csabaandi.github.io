import React from 'react'
import './About_main.css'

function About() {
    return (
        <div className='w-full grow pb-6'>
            <section id="sect_1">
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div></div>
                    <div className='relative col-span-1 sm:-ml-4 sm:mr-4 sm:py-6 md:-ml-8 md:mr-8 md:py-12'>
                        <div className='z-20 flex w-full flex-col items-start  overflow-visible bg-stone-800 px-4 py-8 shadow-xl shadow-black/30 sm:rounded-2xl sm:p-8 lg:p-12'>
                            <div className='mb-4 flex w-full flex-wrap items-center gap-y-2'>
                                <h1 className="mr-4 w-max text-3xl font-black text-white">szia mia</h1>
                            </div>
                            <p className='prose  mb-4 text-stone-400'>aaaaaaaaaaaaaaaaaa</p>
                            <p className='prose  mb-4 text-stone-400'>aaaaaaaaaaaaaaaaaaaaaa</p>                           
                        </div>
                    </div>
                </div>       
            </section>
            <section>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <text className='inline-flex items-center rounded-md text-xl text-white  focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-3xl'>
                        <span className='mr-1'>Sziaaaa</span>
                        <span className='font-bold'>Mia</span>
                    </text>
                </div>       
            </section>
            
        </div>
        )
}

export default About