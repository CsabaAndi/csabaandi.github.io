import * as Icons from "../../Icons/ProjectIcons"


{/** @todo: delete **/}
var bg_color_skill_full = "bg-amber-400"
var bg_color_skill_empty = "bg-stone-700"


const StackBackend: React.FC<{ name: string}> = ({ name}) => (
    <div className='p-2'>
    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
    <div className='mt-4 grid grid-rows-1 justify-center border-none'>
        <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-9
                        rounded-xl border-none  bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                        shadow-xl shadow-black/30'>

            <div className='border-none  bg-stone-800'>
                <Icons.PythonIcon size_min={16} size_standard={32}></Icons.PythonIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.JavaScriptIcon size_min={16} size_standard={32}></Icons.JavaScriptIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.TypeScriptIcon size_min={16} size_standard={32}></Icons.TypeScriptIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.JavaIcon size_min={16} size_standard={32}></Icons.JavaIcon>
            </div>
            
        </div>
    </div>
</div>
)


const StackFrontend: React.FC<{ name: string}> = ({ name}) => (
    <div className='p-2'>
    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
    <div className='mt-4 grid grid-rows-1 justify-center border-none'>
        <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-9
                        rounded-xl border-none  bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                        shadow-xl shadow-black/30'>

            <div className='border-none  bg-stone-800'>
                <Icons.ReactIcon size_min={16} size_standard={32}></Icons.ReactIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.TailwindIcon size_min={16} size_standard={32}></Icons.TailwindIcon>
            </div>
            
        </div>
    </div>
</div>
)


const StackPrivacy: React.FC<{ name: string}> = ({ name}) => (
    <div className='p-2'>
    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
    <div className='mt-4 grid grid-rows-1 justify-center border-none'>
        <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-9
                        rounded-xl border-none  bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                        shadow-xl shadow-black/30'>

            <div className='border-none  bg-stone-800'>
                <Icons.PythonIcon size_min={16} size_standard={32}></Icons.PythonIcon>
            </div>
            {/** @todo: */}
            
        </div>
    </div>
</div>
)


function StackNew() {
    return (
        <section id='sect_3_stacknew' className='px-4 mb-0 sm:p-0 sm:px-4 md:px-8'> {/** @todo: padding/margin size**/}
            <h2 className='mb-0 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className='text-green-700'>Szak</span>
                mai - Ismeretek
            </h2>

            <div className='grid'>
                <div className='space-y-2 rounded-xl border-none  px-2 py-4 shadow-xl shadow-black/30 sm:p-6'> {/** @todo: padding size**/}
                    <StackBackend name="Backend"></StackBackend>
                    <StackFrontend name="Frontend"></StackFrontend>
                    <StackPrivacy name="Privacy"></StackPrivacy>
                </div>
            </div>
        </section>
    )
}
    
    
export default StackNew