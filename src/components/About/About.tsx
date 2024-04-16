

function AboutMe() {
    return (
        <section id='sect_2_about_bottom' className="p-4 mb-12 mt-8 sm:p-0 sm:px-4 md:px-12"> {/** @todo: padding/margin size**/}
                
                <div className='flex flex-col-reverse xl:flex-row'>
                    <div className='xl:ml-8'>
                        <div className='flex flex-col overflow-hidden break-words gap-y-6 rounded-2xl bg-stone-800 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 xl:pr-32 lg:pt-6'> {/** @todo: pr-size **/}
                            <div className='flex flex-wrap mb-1 items-center'>

                                <h1 className="text-3xl font-black text-white items-center ">Andi Csaba</h1>

                                <p className='mt-1 ml-0 xs:ml-1 xxs:ml-0.5 sm:ml-2 text-green-600 font-bold text-sm sm:text-lg'>&lt;Mérnökinformatikus hallgató&gt;</p>
                            </div>
                            <p className='prose text-stone-400 font-bold'>
                                A Szegedi Tudományegyetem Természettudományi és Informatikai Karának{" "}
                                <strong className='text-stone-300'>utolsó éves, mérnökinformatikus</strong>                               
                                {" "}hallgatója vagyok.<br/><br/>
                                Jelenleg{" "}
                                <strong className='text-stone-300'>Szakmaigyakorlat</strong>
                                {" "}céljából keresek munkahelyet egyetem mellett, akár{" "}
                                <strong className='text-stone-300'>teljes munkaidős állásban,</strong>{"  heti 40 órában."} 
                            </p>
                            <div className='grid grid-cols-2 gap-x-2 sm:gap-x-0 md:gap-x-10 lg:gap-x-0 lg:grid-cols-4'>
                                <div className='grid col-start-1 lg:col-span-2 items-end'>
                                    <ul className='grid gap-y-6 sm:gap-y-0'> {/** @todo: space beetween **/}
                                        <li className='gap-x-2'>
                                            <span className='text-xs font-bold text-white sm:text-sm'>Tartozkodási hely: </span>
                                            <span className='text-xs text-gray-300 sm:text-sm'>Szeged</span>
                                        </li>
                                        <li className='gap-x-2 flex-none sm:flex'>
                                            <span className='text-xs font-bold text-white sm:text-sm'>Tanulmányok: </span>
                                            <span className='text-xs text-gray-300 sm:text-sm'>Mérnökinformatikus bsc hallgató</span>
                                        </li>
                                        <li className='gap-x-2'>
                                            <span className='text-xs font-bold text-white sm:text-sm'>Életkor: </span>
                                            <span className='text-xs text-gray-300 sm:text-sm'>23</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-start-2 rounded-xl border-2 border-green-900 bg-stone-900 text-xs sm:text-sm text-white overflow-hidden break-words p-2 sm:p-3 lg:col-start-3 lg:col-span-2'>
                                    <p className="text-xs font-bold text-white sm:text-sm mb-1">Hobbik</p>
                                    <ul className='grid grid-cols-1 gap-4 px-4'>
                                        <li className='col-span-1 flex gap-x-2'>
                                            <span className='font-bold'>Főzés: </span>
                                            <p className="pt-1 sm:pt-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            </p>
                                        </li>
                                        <li className='col-span-1 flex gap-x-2'>
                                            <span className='font-bold'>Futás: </span>
                                            <p className="pt-1 sm:pt-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            </p>
                                        </li>
                                        <li className='col-span-1 flex gap-x-2'>
                                            <span className='font-bold'>Olvasás: </span>
                                            <p className="pt-1 sm:pt-0">Krimi és Fantasy rajongó vagyok. 
                                            </p>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:basis-1/12'>
                        <div className='-my-8 flex w-full justify-center self-center xl:-ml-24 xl:block'>
                            <div className='z-20 aspect-square w-28 lg:w-36 xl:w-40 overflow-hidden rounded-3xl shadow-xl shadow-black/40'>
                                <img src={"https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo="} alt="Logo" />;                               
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default AboutMe