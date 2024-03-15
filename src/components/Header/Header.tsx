import { GithubIcon, LinkedinIcon} from '../Icons/SocialIcons';


// border border-stone-900 base
// border border-sky-600 testing

    
function Header() {

    const scrollToSection = (section: string) => {
        const section_projects = document.getElementById(section)
        if (section_projects != null) {
            // 
            section_projects.scrollIntoView({
                behavior: 'smooth' 
              })
            }   
      }


    return (
        <div className='flex w-full items-center justify-between border border-stone-900 p-4 md:p-8'>
            <text id="header_text_name" className='flex items-center text-xs text-white sm:text-3xl'>
                <span className='mr-1'>Andi</span>
                <span className='font-bold'>Csaba</span>
            </text>
            <div id="header_section_links" className='flex gap-x-2 text-stone-200 text-xs sm:gap-x-4 sm:text-2xl'> {/** @todo: better implementation pls **/}
                <button onClick={() => scrollToSection("sect_xy_thesis")}>
                    <span>Szakdolgozat</span>
                </button>
                <button onClick={() => scrollToSection("sect_4_edu")}>
                    <span>Tanulmányok</span>
                </button>
            </div>
            <div id="header_icons" className='flex gap-x-2 sm:gap-x-3'>
                <GithubIcon size_min={16} size_standard={32}></GithubIcon>
                <LinkedinIcon size_min={16} size_standard={32}></LinkedinIcon>
            </div>
        </div>
        )
}

export default Header;