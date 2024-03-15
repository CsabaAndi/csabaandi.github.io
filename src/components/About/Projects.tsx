import { PythonIcon } from "../Icons/ProjectIcons";


{/** @todo: fix icon location**/}
const PartBlockWithIcon: React.FC<{ name: string}> = ({ name,}) => (
  <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
    <div className='col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 grid grid-cols-2 
                    justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                    shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10'>
      <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>{name}</h3>
      <div className='border-none border-green-900 bg-stone-800'>
        <PythonIcon size_min={16} size_standard={32}></PythonIcon>
      </div>
    </div>
  </div>
);


function Projects() {
  return (
      <section id='sect_x_projects' className='p-4 pt-12 md:p-8 md:pt-12'>
          <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
          <span className="text-green-700">Proje</span>
          cts
          </h2>
          <div className='grid grid-cols-8 sm:grid-cols-1'>

          <div className='grid gap-2 col-span-6 gap-4 sm:gap-2 md:gap-4 lg:gap-6 col-start-2 sm:auto-cols-fr sm:grid-flow-col'>

            <div className='space-y-2 p-4 rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-4 lg:p-4'>
              <h3 className='text-md text-center mb-4 font-extrabold tracking-tight text-stone-200 sm:text-lg'>data collecting</h3>
              <PartBlockWithIcon name="Python"></PartBlockWithIcon>
              <PartBlockWithIcon name="Playwright"></PartBlockWithIcon>
              <p className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg py-4'>
                Adatgyüjtés a <br/>
                Szakdolgozathoz
              </p>
            </div>

            <div className='space-y-2 p-4 rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-4 lg:p-4'>
              <h3 className='text-md text-center mb-4 font-extrabold tracking-tight text-stone-200 sm:text-lg'>Portfolio</h3>
              <PartBlockWithIcon name="React"></PartBlockWithIcon>
              <PartBlockWithIcon name="tailwindcss"></PartBlockWithIcon>
              <PartBlockWithIcon name="Docker"></PartBlockWithIcon>
              <p className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg py-4'>
                Porfolió weboldal
              </p>
            </div>

            <div className='space-y-2 p-4 rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-4 lg:p-4'>
              <h3 className='text-md text-center mb-4 font-extrabold tracking-tight text-stone-200 sm:text-lg'>WIP PROJECT 3</h3>
              <PartBlockWithIcon name="Python"></PartBlockWithIcon>
              <PartBlockWithIcon name="Playwright"></PartBlockWithIcon>
              <PartBlockWithIcon name="Docker"></PartBlockWithIcon>
              <p className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg py-4'>
                  Linux szerveren való futtatása a portfólio weboldalnak
              </p>
            </div>

            </div>

          </div>
          
      </section>
  )
}

export default Projects