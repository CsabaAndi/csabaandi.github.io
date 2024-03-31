type experience = {
    start_year: string | number
    end_year: number | string
    location: string
    description: string
  }


const ExperienceRowBlock: React.FC<experience> = (data: experience) => (
    <li className='relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0'>
        <div className='absolute -left-2 top-3 flex items-center space-x-2 md:-left-2'>
            <span className='whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30'>
                {data.start_year} {data.end_year != "" ? "-" : ""} {data.end_year}
            </span>
            <span className='text-xs font-medium text-stone-400'>{data.location}</span>
        </div>
        <div className='prose prose-sm flex flex-col pt-10 prose-ul:list-none'>
            <h2 className='font-bold text-stone-200'>{data.description}</h2>
        </div>
    </li>   
)
        

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
                        <ExperienceRowBlock start_year={2019} end_year="present" location="Szegedi Tudományegyetem" description="Bachelor of Computer Science Engineering"></ExperienceRowBlock>  
                        <ExperienceRowBlock start_year={2015} end_year={2019} location="Szekszárdi I. Béla Gimnázium, Kollégium és Általános Iskola" description="izé"></ExperienceRowBlock>                    
                    </ul>
                </div>
                <div className='col-span-1'>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700'>Lan</span>
                        guages
                    </h2>
                    <ul>                       
                        <ExperienceRowBlock start_year={2019} end_year="" location="vahaloh" description="English vmi complex c"></ExperienceRowBlock>               
                    </ul>
                </div>
                {/* for future work experience */}
                <div className='col-span-1 hidden'>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700'>Work </span>
                        Experience
                    </h2>
                    <ul>
                        <ExperienceRowBlock start_year={2005} end_year="" location="Mustafar" description="I Have The High Ground"></ExperienceRowBlock>                   
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Education