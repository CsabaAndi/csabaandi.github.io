import {GithubIcon} from '../Icons/SocialIcons'

function Thesis() {
    return (
        <section id='sect_xy_thesis' className='p-4 pt-12 md:p-8 md:pt-12'>
            <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className="text-green-700">Szak</span>
                dolgozat
            </h2>
            <div className='grid grid-cols-6 sm:auto-cols-fr sm:grid-flow-col lg:gap-8'>
                <div className='class="flex flex-col col-start-2 col-end-6 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>
                    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>"Mély tanulás és szövegfeldolgozás alkalmazása a sportfogadásban"</h3>
                    <div className='grid grid-cols-8 grid-rows-2 gap-2 sm:auto-cols-fr sm:grid-flow-col lg:gap-2'> 
                        <div className='class="flex flex-col row-start-2 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>                  
                            <GithubIcon size_min={16} size_standard={32}></GithubIcon>                          
                        </div>
                        <div className='class="flex flex-col col-span-7 row-span-2 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'> 
                            <p className='text-md text-left tracking-tight text-stone-200 sm:text-lg'> 
                            {"áááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááááá"}<br/>
                            {"heti 36 óra ráéréssel"}<br/>
                            {"heti 36 óra ráéréssel"}<br/>
                            {"heti 36 óra ráéréssel"}<br/>
                            {"heti 36 óra ráéréssel"}<br/>
                            </p>
                        </div>
                    </div>
                </div>                                   
            </div>
        </section>
    )
}


export default Thesis 