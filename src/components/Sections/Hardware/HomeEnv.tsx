import React from 'react';
import { WinIcon } from '../Icons/HardwareIcon';


function Hardware() {
    return (
        <section id="sect_xyz_hardware" className='p-4 pt-12 md:p-8 md:pt-12'>
            <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className="text-green-700">Hard</span>
                ware
            </h2>
                <div className='grid grid-cols-8 grid-rows-2 sm:auto-cols-fr sm:grid-flow-col lg:gap-2'> 
                    <div className='class="flex flex-col col-span-1 row-span-1 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'> 
                        <WinIcon></WinIcon>
                    </div>
                    <div className='class="flex flex-col col-span-3 row-span-1 row-start-1 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'> 
                        <p className='text-md text-left tracking-tight text-stone-200 sm:text-lg'> 
                            {"desktop - winfos"}<br/>
                        </p>
                    </div>

                    <div className='class="flex flex-col col-span-1 col-start-1 row-span-1 row-start-2 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'> 
                        <WinIcon></WinIcon>
                    </div>
                    <div className='class="flex flex-col col-span-3 row-span-1 row-start-2 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'> 
                        <p className='text-md text-left tracking-tight text-stone-200 sm:text-lg'> 
                            {"laptop - fedora workstation"}<br/>
                        </p>
                    </div>
                </div>
        </section>
    )
}


export default Hardware