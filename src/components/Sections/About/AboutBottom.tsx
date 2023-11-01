import React from 'react';


function AboutBottom() {
    return (
        <section id='sect_2_about_bottom' className="p-4 pt-12 md:p-8 md:pt-12">
                <div className=''>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-cyan-600'>Abo</span>
                        ut me
                    </h2>
                </div>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='relative flex grow lg:basis-5/6 '>
                        <div className='flex w-full flex-col items-start gap-y-6 overflow-visible rounded-2xl bg-stone-800 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 lg:pr-28 lg:pt-8'>                           
                            <div className='mb-4 flex w-full flex-wrap items-center'>
                                <h1 className="mr-4 w-max text-3xl font-black text-white items-center ">Andi Csaba</h1>
                                <p className='flex justify-start space-x-2 md:-left-2 text-stone-400 font-bold'>&lt;Mérnökinformatikus hallgató&gt;</p>
                            </div>
                            <p className='prose  mb-1 text-stone-400 font-bold'>
                                <strong className='text-stone-300'> Szegedi Tudományegyetem, Természettudományi és Informatikai Karának </strong>
                                <strong className='text-stone-300'>utolsó éves</strong> <br/>
                                mérnökinformatikus hallgatója.
                                {"heti 36 óra ráéréssel"}<br/>
                                {", heti 36 óra ráéréssel"}
                            </p>
                            <p className='prose text-stone-400'>Szakmaigyakorlat</p>  
                            <p className='prose text-stone-400'>Szakdolgozat</p>        
                            <p className='prose  mb-4 text-stone-400 font-bold'>Ide magamról meg ilyesmi jön</p>
                            
                            <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                                <li className='col-span-1 flex items-start gap-x-2'>
                                    <span className='text-xs font-bold text-white sm:text-sm'>Location: </span>
                                    <span className=' text-xs text-gray-300 sm:text-sm'>Szeged</span>
                                </li>
                                <li className='col-span-1 flex items-start gap-x-2'>
                                    <span className='text-xs font-bold text-white sm:text-sm'>Nationality: </span>
                                    <span className=' text-xs text-gray-300 sm:text-sm'>Hungarian</span>
                                </li>
                                <li className='col-span-1 flex items-start gap-x-2'>
                                    <span className='text-xs font-bold text-white sm:text-sm'>Study: </span>
                                    <span className=' text-xs text-gray-300 sm:text-sm'>University of Szeged</span>
                                </li>
                                <li className='col-span-1 flex items-start gap-x-2'>
                                    <span className='text-xs font-bold text-white sm:text-sm'>Age: </span>
                                    <span className=' text-xs text-gray-300 sm:text-sm'>23</span>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className='flex w-full grow items-end gap-x-4 lg:flex-1 lg:basis-1/6'>
                        <div className='-my-8 flex w-full flex-1 justify-center self-center lg:-ml-24 lg:block  lg:py-16'>
                            <div className='relative z-20 aspect-square w-32 overflow-hidden rounded-3xl shadow-xl shadow-black/40  lg:w-auto '>
                                <div style={{backgroundImage: `url("https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo=")`}}>
                                <div className='flex h-64 w-64'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default AboutBottom