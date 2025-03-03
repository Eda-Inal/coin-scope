import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer: React.FC = () => {

    return (
        <>

<footer className="w-full  p-4 text-center mt-4">
      <div className="flex justify-center space-x-6 mb-2">
      
        <a
          href="https://github.com/Eda-Inal"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-3xl  transition"
        >
          <FaGithub />
        </a>

    
        <a
          href="https://www.linkedin.com/in/edainal"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-3xl  transition"
        >
          <FaLinkedin />
        </a>
      </div>

   
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>

        </>

    )
}

export default Footer
