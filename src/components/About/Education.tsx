

function Education() {
    return (
        <section id='sect_4_edu' className='p-4 pt-12 md:p-8 md:pt-12'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
                <div className='col-span-1'>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700'>Edu</span>
                        cation
                    </h2>
                    <ul>
                        <li className='relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0'>
                            <div className='absolute -left-2 top-3 flex items-center space-x-2 md:-left-2'>
                                <span className='whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30'>
                                    2019 - present
                                </span>
                                <span className='text-xs font-medium text-stone-400'>Szegedi Tudományegyetem</span>
                            </div>
                            <div className='prose prose-sm flex flex-col pt-10 prose-ul:list-none'>
                                <h2 className='font-bold text-stone-200'>Bachelor of Computer Science Engineering</h2>
                            </div>
                        </li>   
                        <li className='relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0'>
                            <div className='absolute -left-2 top-3 flex items-center space-x-2 md:-left-2'>
                                <span className='whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30'>
                                    2015 - 2019
                                </span>
                                <span className='text-xs font-medium text-stone-400'>Szekszárdi I. Béla Gimnázium, Kollégium és Általános Iskola</span>
                            </div>
                            <div className='prose prose-sm flex flex-col pt-10 prose-ul:list-none'>
                                <h2 className='font-bold text-stone-200'>izé</h2>
                            </div>
                        </li>                  
                    </ul>
                </div>
                <div className='col-span-1'>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700'>Lan</span>
                        guages
                    </h2>
                    <ul>
                        <li className='relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0'>
                            <div className='absolute -left-2 top-3 flex items-center space-x-2 md:-left-2'>
                                <span className='whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30'>
                                    2019
                                </span>
                                <span className='text-xs font-medium text-stone-400'>vahaloh</span>
                            </div>
                            <div className='prose prose-sm flex flex-col pt-10 prose-ul:list-none'>
                                <h2 className='font-bold text-stone-200'>English vmi complex c</h2>
                            </div>
                        </li>                    
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Education
