var bg_color_skill_full = "bg-amber-400"
var bg_color_skill_empty = "bg-stone-700"


const StackPartBlock: React.FC<{ name: string, description: string}> = ({ name, description}) => (
    <div>
        <abbr style={{border: "none", textDecoration: "none"}} title={description}>
            <div className='class="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>
                <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
            </div>
        </abbr>
    </div>
);


function StackNew() {
    return (
        <section id='sect_3_stacknew' className='p-4 pt-12 md:p-8 md:pt-12'>
            <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className='text-green-700'>Cor</span>
                e tech stack - NEW
            </h2>
            <div className='grid grid-cols-2 gap-2 sm:auto-cols-fr sm:grid-flow-col lg:gap-8'>
                <div className='class="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>
                    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>Backend</h3> {/* Python Java JavaScript / TypeScript */}
                    <StackPartBlock name="Docker" description=""></StackPartBlock>  
                    <StackPartBlock name="Docker" description=""></StackPartBlock>  
                    <StackPartBlock name="Docker" description=""></StackPartBlock>
                </div>
                <div className='class="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>
                    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>Frontend</h3> {/* Python Java JavaScript / TypeScript */}
                    <StackPartBlock name="Docker" description=""></StackPartBlock>  
                    <StackPartBlock name="Docker" description=""></StackPartBlock>  
                    <StackPartBlock name="Docker" description=""></StackPartBlock>
                </div>
                <div className='class="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>
                    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>Contanirezation</h3> {/* Python Java JavaScript / TypeScript */}
                    <StackPartBlock name="Docker" description=""></StackPartBlock>  
                    <StackPartBlock name="Docker" description=""></StackPartBlock>  
                    <StackPartBlock name="Docker" description=""></StackPartBlock>
                </div>
                {/**  @todo: delete unnecessary words**/}
                <div className='class="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6'>
                    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>Engineering</h3> {/* Python Java JavaScript / TypeScript */}
                    <StackPartBlock name="Elektronika" description="elektrooo"></StackPartBlock>  
                    <StackPartBlock name="Mikrovezérlők" description="miki"></StackPartBlock>  
                    <StackPartBlock name="Irányításteknika(?)" description=""></StackPartBlock>
                </div>
                
            </div>
        </section>
    )
}
    
    
export default StackNew