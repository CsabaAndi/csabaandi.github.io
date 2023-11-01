import React from 'react'

var bg_color_skill_full = "bg-amber-400"
var bg_color_skill_empty = "bg-stone-700"

function Stack() {
    return (
        <section id='sect_3_stack' className='p-4 pt-12 md:p-8 md:pt-12'>
            <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className='text-green-700'>Cor</span>
                e tech stack
            </h2>
            {/* legeelsö block kicsit átirva többit majd átkell, ez még nagyon test meg mokolás */}
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:gap-8'>
                <div className='sm:grid sm:grid-cols-[max-content_1fr]'>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Backend</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Python</span>
                    </div>
                    <div className='flex w-full items-center justify-start sm:space-x-0.5'>
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                        <span className='flex flex-grow h-1/3 rounded-md bg-cyan-700 text-yellow-600 sm:flex-grow'>
                            <span className='invisible'>a</span>
                        </span> 
                        {/* test, dunno mért tünik el */}
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Java</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>JavaScript / TypeScript</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Frontend</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>React</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Database</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                </div>
                <div className='grid-cols-[max-content_1fr] place-content-start gap-2 hidden sm:grid'>
                <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Contanirezation</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Docker</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Kubernetes</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>AWS</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Azure</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Engineering</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Electronics</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Microcontrollers</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>Signals and Systems</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Other</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>                   
                </div>
                <div className='grid-cols-[max-content_1fr] place-content-start gap-2 hidden sm:grid'>
                <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>vmi_1</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>                                    
                </div>
                <div className='grid-cols-[max-content_1fr] place-content-start gap-2 hidden sm:grid'>
                <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>vmi_2</h3>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                    <div className='grid grid-flow-col justify-start'>
                        <span className='class=" whitespace-nowrap text-sm font-medium text-stone-400'>.</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_full}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                        <span className={"flex h-1/3 flex-grow rounded-md " + bg_color_skill_empty}></span>
                    </div>
                                       
                </div>
            </div>
        </section>
    )
}


export default Stack