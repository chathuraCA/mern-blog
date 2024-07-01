import { Footer } from 'flowbite-react'
import React from 'react'
import { Link} from "react-router-dom";
import { FaFacebook,FaInstagram,FaTwitter,FaGithub,FaYoutube  } from "react-icons/fa";



export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link
        className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
        to="/"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg ">
          Chathura
        </span>
        Blog
      </Link>
                </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
  <div>
  <Footer.Title title='About'/>
            <Footer.LinkGroup col>
            <Footer.Link 
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
                100 js projects
            </Footer.Link>
            <Footer.Link
              href='/about'
              target='_blank'
              rel='noopener noreferrer'
            >
                Chathura's blog
            </Footer.Link>
            </Footer.LinkGroup>
  </div>


  <div>
  <Footer.Title title='Fllow us'/>
            <Footer.LinkGroup col>
            <Footer.Link 
            href='https://www.github.com'
            target='_blank'
            rel='noopener noreferrer'
            >
                Github
            </Footer.Link>
            <Footer.Link
              href='#'
              
            >
            Discord 
            </Footer.Link>
            </Footer.LinkGroup>
  </div>


  <div>
  <Footer.Title title='LEGEL'/>
            <Footer.LinkGroup col>
            <Footer.Link 
            href='#'
           
            >
                Privecy policy
            </Footer.Link>
            <Footer.Link
              href='/about'
              target='_blank'
              rel='noopener noreferrer'
            >
                Terms and conditions
            </Footer.Link>
            </Footer.LinkGroup>
  </div>


            </div>      
            </div>
            <Footer.Divider/>
<div className='text-center'>
<Footer.Copyright href='#' by="Chathura blog" year={new Date().getFullYear()}/>
</div>
<div className='flex w-full gap-6 justify-center mt-8'>
<Footer.Icon href='#' icon={FaFacebook}/>
<Footer.Icon href='#' icon={FaInstagram}/>
<Footer.Icon href='#' icon={FaYoutube}/>
<Footer.Icon href='#' icon={FaTwitter}/>
<Footer.Icon href='#' icon={FaGithub}/>
</div>

        </div>
    </Footer>
  )
}
