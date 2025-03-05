import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RootState } from '@/app/store'
import { getTranslation } from '@/app/utils/getTranslation'
import { useSelector } from 'react-redux'


const Footer: React.FC = () => {
  const locale = useSelector((state: RootState) => state.language.locale);
  const t = getTranslation(locale);
  return (
    <>

      <footer className="w-full  p-4 text-center mt-4">
        <div className="flex justify-center space-x-6 mb-2">

          <a
            href="https://github.com/Eda-Inal"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-3xl  transition"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/edainal"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-3xl  transition"
            aria-label="Visit my LinkedIn profile"
            
          >
            <FaLinkedin />
          </a>
        </div>


        <p className="text-sm text-gray-400">© {new Date().getFullYear()}{t.footer}</p>
      </footer>

    </>

  )
}

export default Footer
