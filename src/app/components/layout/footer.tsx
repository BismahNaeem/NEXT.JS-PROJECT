
"use client"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin,  faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
return(
    <div>
<footer className="bg-black text-white py-4 ">

            {/* fontawesome icons */}
  <div className="flex justify-center space-x-6 mb-3">
    <a href= "https://www.linkedin.com/in/bismah-naeem-901b49290" target='_blank' rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} className='text-xl hover:text-blue-500'/>
    </a>
   
    <a href= "https://github.com/BismahNaeem" target='_blank' rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} className='text-xl hover:text-blue-500'/>
    </a>
    
  </div>
          {/* navigation links  */}
          <ul className="  flex justify-center gap-x-6  font-extralight   ">
    <li>
            <Link href="/">HOME</Link>
        </li>
        <li>
            <Link href="/skills">SKILLS</Link>
        </li>
        <li>
            <Link href="/projects">PROJECTS</Link>
        </li>
    </ul>

    <div className="text-center text-sm text-gray-700 mt-2">
      &copy; 2024; Designed by Bismah Naeem
    </div>
       </footer>
       </div>
)
}