import react from 'react'
import { FaFacebook, FaLinkedin,FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
export default function Footer(){
const Tdate = new Date()
    return(
        <div id='footer'  className="bg-slate-900 text-white text-xl">
        <section className='max-w-4xl h-auto mx-auto p-4 flex flex-col sm:flex-row sm:justify-between '>
            <address>
                Ipaja LGA Lagos State,Nigeria<br></br>
                Email:<a href='mailto:pelumiogunsina4@gmail.com'>pelumiogunsina4@gmail.com</a><br></br>
                Phone:<a href='tel:+2348155917944'>2348155917944</a>
            </address>   
            <nav className=' md:flex flex-col gap-4 text-2xl' aria-label='footer'>
                <a href='#portfolio' className='hover:opacity-90 p-2'>Home</a>
                <a href='#About' className='hover:opacity-90 p-2'>About</a>
                <a href='#project' className='hover:opacity-90 p-2'>Projects</a>
                <a href='#contact' className='hover:opacity-90 p-2 scroll-m-20'>Contact</a>
            </nav>  
            <div className='flex flex-row gap-5 text-2xl sm:gap-4 sm:flex-col mt-4'>
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedin/>
                <FaTwitter/>
                <FaWhatsapp/>
            </div>
            
        </section>
          <section>
          <div className='flex flex-row justify-evenly self-center sm:gap-2'>
                <p className='text-right'>CopyRight &copy; <span id='year'>{Tdate.getFullYear()}</span></p>
                <p className='text-right'> All Right Reserved</p>
            </div>
          </section>  
        
            
        </div>
    )

}