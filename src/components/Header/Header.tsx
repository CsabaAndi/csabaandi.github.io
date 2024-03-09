import { GithubIcon, LinkedinIcon} from '../Icons/MainIcons';


// border border-stone-900 base
// border border-sky-600 testing
function Header() {
    return (
        <div className='flex w-full items-center justify-between border border-stone-900 p-4 md:p-8'>
            <text id="header_text_name" className='flex items-center text-xs text-white sm:text-3xl'>
                <span className='mr-1'>Andi</span>
                <span className='font-bold'>Csaba</span>
            </text>
            <div id="header_section_links" className='flex gap-x-2 text-stone-200 text-xs sm:gap-x-4 sm:text-2xl'> {/** @todo: better implementation pls **/}
                <a href='#sect_xy_thesis' rel="noopener noreferrer" title="Szakdolgozat">
                    <span>Szakdolgozat</span>
                </a>
                <a href='#sect_xy_thesis' rel="noopener noreferrer" className='hidden'>
                    <span>Projectek</span>
                </a>
                <a href='#sect_4_edu' rel="noopener noreferrer" title="Tanulmányok">
                    <span>Tanulmányok</span>
                </a>
            </div>
            <div id="header_icons" className='flex gap-x-2 sm:gap-x-3'>
                <GithubIcon size_min={16} size_standard={32}></GithubIcon>
                <LinkedinIcon size_min={16} size_standard={32}></LinkedinIcon>
            </div>
        </div>
        )
}


export default Header;