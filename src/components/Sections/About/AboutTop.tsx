import React from 'react';


function AboutTop() {
    return (
        <section id='sect_1_about_top' className='p-4 pt-12 md:p-8 md:pt-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='flex w-50 flex-col items-start lg:p-2'>
                        <div className='w-32 h-32 bg-no-repeat bg-cover justify-center ' style={{backgroundImage: `url("https://sci.u-szeged.hu/site/design2/img/logo_ttik.png")`}}>
                    </div>
                    </div>                  
                    <div className='relative col-span-1 sm:-ml-4 sm:mr-4 sm:py-6 md:-ml-8 md:mr-8 md:py-12'>
                        <div className='z-20 flex w-full flex-col items-start  overflow-visible bg-stone-800 px-4 py-8 shadow-xl shadow-black/30 sm:rounded-2xl sm:p-8 lg:p-12'>                           
                            <div className='mb-4 flex w-full flex-wrap items-center'>
                                <h1 className="mr-4 w-max text-3xl font-black text-white items-center ">Andi Csaba</h1>
                                <p className='flex justify-start space-x-2 md:-left-2 text-stone-400 font-bold'>&lt;Mérnökinformatikus hallgató&gt;</p>
                            </div>
                            <p className='prose  mb-1 text-stone-400 font-bold'>
                                <strong className='text-stone-300'> Szegedi Tudományegyetem, Természettudományi és Informatikai Karának </strong> 
                                <strong className='text-stone-300'>utolsó éves</strong>
                                mérnökinformatikus hallgatója.
                                {"heti 36 óra ráéréssel"}<br/>
                                {", heti 36 óra ráéréssel"}
                            </p>
                            <p className='prose text-stone-400'>Szakmagyakorlat</p>  
                            <p className='prose text-stone-400'>Szakdolgozat</p>                           
                        </div>
                    </div>
                </div>  
        </section>
    )
}

export default AboutTop