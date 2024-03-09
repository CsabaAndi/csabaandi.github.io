import { EmailIcon, GithubIcon, LinkedinIcon } from "../Icons/MainIcons"


// border border-stone-900 base
// border border-sky-600 testing
// border-t dunno

function Footer(){
        return (
          <footer className='flex flex-col w-full items-center justify-between gap-y-4 border-t-4 border border-stone-900 bg-stone-800 px-4 py-6 sm:flex-row sm:py-4 md:px-8'>
          <p id="footer_p_copyright" className='w-max text-sm font-semibold text-stone-300'>© 2023 Csaba Andi</p>
          <div id="footer_icons" className='flex gap-x-6 sm:gap-x-4 text-stone-200'>
            <GithubIcon size_min={20} size_standard={20}></GithubIcon>
            <LinkedinIcon size_min={20} size_standard={20}></LinkedinIcon>
            {/** @todo: better implementation pls **/}
          </div>
          </footer>
        )
    }

export default Footer
