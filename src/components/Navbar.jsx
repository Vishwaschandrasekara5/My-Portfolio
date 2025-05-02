import { useState } from "react"
import {useEffect} from "react"
import { HiMenu } from "react-icons/hi";
import logo from '../assets/logo.png'

function Navbar() {
    const [isMenuopen,setIsMenuopen] = useState(false);
    const [isSticky,setIsSticky] = useState(false);

    const togglemenu = ()=>{
        setIsMenuopen(true);
    }

    useEffect(() => {
      const handlescroll = ()=>{
        if(window.scrollY > 0){
            setIsSticky(true)
        }
      }
    
      window.addEventListener("scroll",handlescroll)
    }, [])
    
  
    return (
    <header className="w-full fixed top-0 left-0 right-0">
        <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white":""}`}>
            <div className="flex items-center justify-between">
                <div className="cursor-pointer">
                    <img src={logo} alt="" className="h-24"/>
                </div>

                <div className="lg:flex items-center gap-3 hidden text-body">
                    <a href="/" className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 text-lg">Home</a>
                    <a href="/" className="block py-2 px-4 cursor-pointer text-body hover:text-gray-400 text-lg">Skills</a>
                    <a href="/" className="block py-2 px-4 cursor-pointer text-body hover:text-gray-400 text-lg">About Me</a>
                    <a href="/" className="block py-2 px-4 cursor-pointer text-body hover:text-gray-400 text-lg">Portfolio</a>
                    <a href="/" className="block py-2 px-4 cursor-pointer text-body hover:text-gray-400 text-lg">Testimonials</a>
                </div>

                <div className="lg:block hidden">
                    <button className="outlineBtn">Contact Me</button>
                </div>

                <button onClick={togglemenu} className="lg:hidden text-body text-3xl"><HiMenu /></button>
            
            </div>

            {
    isMenuopen && (
        <div className="mt-4 p-4 bg-body rounded-lg text-white">
            <a href="/" className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 text-lg">Home</a>
            <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400 text-lg">Skills</a>
            <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400 text-lg">About Me</a>
            <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400 text-lg">Portfolio</a>
            <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400 text-lg">Testimonials</a>  
        </div>
    )
}




        </nav>
    </header>
  )
}

export default Navbar