

function AboutBottom() {
    return (
        <section id='sect_2_about_bottom' className="p-4 mb-12 sm:p-0 sm:px-4 md:px-8"> {/** @todo: padding/margin size**/}
                <div className=''>
                    <h2 className='pb-4 lg:pb-6 md:pb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700'>Abo</span>
                        ut me
                    </h2>
                </div>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='lg:ml-12'>
                        <div className='flex flex-col overflow-hidden break-words gap-y-6 rounded-2xl bg-stone-800 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 lg:pr-48 lg:pt-6'>
                            <div className='flex flex-wrap mb-1 items-center'>

                                <h1 className="text-3xl font-black text-white items-center ">Andi Csaba</h1>

                                <p className='mt-1 ml-0 xs:ml-1 xxs:ml-0.5 sm:ml-2 text-stone-400 font-bold'>&lt;Mérnökinformatikus hallgató&gt;</p>
                            </div>
                            <p className='prose text-stone-400 font-bold'>
                                <strong className='text-stone-300'> Szegedi Tudományegyetem, Természettudományi és Informatikai Karának </strong>
                                <strong className='text-stone-300'>utolsó éves </strong>
                                mérnökinformatikus hallgatója vagyok.
                            </p>
                            <div className='grid grid-cols-2 gap-y-2 gap-x-0 sm:gap-x-0 md:gap-x-10 lg:gap-x-0 lg:grid-cols-4'>
                                <div className='flex col-start-1 content-evenly lg:col-span-1'>
                                    {/** <p className='col-start-1 prose text-stone-400'>Szakmaigyakorlat</p>  **/}
                                    {/** <p className='col-start-1 prose text-stone-400'>Szakdolgozat</p>      **/}
                                    {/** <p className='col-start-1 prose  mb-4 text-stone-400 font-bold'>Ide magamról meg ilyesmi jön</p> **/}
                                    <ul className='grid grid-cols-1 col-start-1 gap-2'>
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
                                <div className='col-start-2 rounded-xl border-none bg-stone-900 text-xs sm:text-sm text-white overflow-hidden break-words p-2 lg:col-start-3 lg:col-span-2'>
                                    <p className="text-xs font-bold text-white sm:text-sm">Hobbik:</p>
                                    <ul className='grid grid-cols-1 gap-4'>
                                        <li className='col-span-1 flex gap-x-2'>
                                            <span className='font-bold'>Főzés: </span>
                                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            </p>
                                        </li>
                                        <li className='col-span-1 flex gap-x-2'>
                                            <span className='font-bold'>Főzés: </span>
                                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            </p>
                                        </li>
                                        <li className='col-span-1 flex gap-x-2'>
                                            <span className='font-bold'>Főzés: </span>
                                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            </p>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full grow items-end gap-x-4 lg:flex-1 lg:basis-1/6'>
                        <div className='-my-8 flex w-full flex-1 justify-center self-center lg:-ml-24 lg:block  lg:py-16'>
                            <div className='relative z-20 aspect-square w-32 overflow-hidden rounded-3xl shadow-xl shadow-black/40  lg:w-52 '>
                                <img src={"https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo="} alt="Logo" />;                               
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default AboutBottom