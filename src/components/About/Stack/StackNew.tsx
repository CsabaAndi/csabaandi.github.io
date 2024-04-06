import { PythonIcon } from "../../Icons/ProjectIcons";


{/** @todo: delete **/}
var bg_color_skill_full = "bg-amber-400"
var bg_color_skill_empty = "bg-stone-700"


const StackPartBlock: React.FC<{ name: string, description: string}> = ({ name, description}) => (
    <div>
        <abbr style={{border: "none", textDecoration: "none"}} title={description}> {/**  @todo better implementation for desc showing **/}
            <div className='flex flex-col items-center justify-center space-y-2 rounded-xl border-none  bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>
                <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
            </div>
        </abbr>
    </div>
)


{/** @todo: fix gap-size **/}
const TestBlock: React.FC<{ title: string}> = ({ title}) => (
    <div className='p-2'>
        <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{title}</h3> {/* Python Java JavaScript / TypeScript */}
        <div className='mt-4 grid grid-rows-1 border-none'>
            <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-9
                            justify-items-start items-center rounded-xl border-none  bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                            shadow-xl shadow-black/30'>

                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
                <div className='border-none  bg-stone-800'>
                    <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                </div>
            </div>
        </div>
    </div>
);


function StackNew() {
    return (
        <section id='sect_3_stacknew' className='px-4 mb- sm:p-0 sm:px-4 md:px-8'> {/** @todo: padding/margin size**/}
            <h2 className='mb-0 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className='text-green-700'>Szak</span>
                mai - Ismeretek
            </h2>

            <div className='grid'>
                <div className='space-y-2 rounded-xl border-none  px-2 py-4 shadow-xl shadow-black/30 sm:p-6'> {/** @todo: padding size**/}
                    <TestBlock title="Backend"></TestBlock>
                    <TestBlock title="Frontend"></TestBlock>
                    <TestBlock title="Privacy"></TestBlock>
                </div>
            </div>
        </section>
    )
}
    
    
export default StackNew