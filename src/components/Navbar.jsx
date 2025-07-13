import React,{useState, useEffect, useRef} from 'react';
import {gsap} from 'gsap'

import Logo from '../media/img/logo.png'

const Navbar = () => {

    const hsNav = useRef();
    const navigation = useRef();
    const [isOpen, setIsOpen] = useState(false);


    const _light = ()=> {


        gsap.to(".navbar", {css:{ backgroundColor: "#00000000"}, duration: 2, ease: "power4.out"});
        gsap.to(".link", {color:"#333", duration: 2, ease: "power4.out"});
        gsap.to(".logo", {color:"#333", duration: 2, ease: "power4.out"});
    }
    const _dark = ()=> {



        gsap.to(".navbar", {backgroundColor:"#F4F7FB", opacity:100, duration: 2, ease: "power4.out"});
        gsap.to(".link", {color:"#333", duration: 2, ease: "power4.out"});
        gsap.to(".logo", {color:"#333", duration: 2, ease: "power4.out"});


 

    }

        const [header, setHeader] = useState(_light)
 
        const listenScrollEvent = (event) => {
          if (window.scrollY < 70 ) {
            return setHeader(_light)
          } else if (window.scrollY > 70 ) {
            return setHeader(_dark)
          } 
        }
        
        useEffect(() => {
          window.addEventListener('scroll', listenScrollEvent);
        
          return () =>
            window.removeEventListener('scroll', listenScrollEvent);
        }, []);

        const toggleNavbar = () => {


            setIsOpen(!isOpen);

            if(isOpen === true){

                hsNav.current.classList.add('hidden')
            }else if (isOpen === false){

                hsNav.current.classList.remove('hidden')
            }
        
        }




    return (
        <header ref={navigation} className=" flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-transparent text-sm py-3 navbar fixed top-0 z-50">
            <nav className="container mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                    <img src={Logo} width="40" alt="" />
                <a className="flex-none text-xl font-semibold text-gray-700 focus:outline-hidden focus:opacity-80 logo open-bold" href="#" aria-label="Brand">
                    Monto
                </a>
                <div className="sm:hidden">
                    <button type="button" onClick={toggleNavbar}  className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-transparent link text-gray-900 shadow-2xs hover:bg-transparent focus:outline-hidden focus:bg-transparent disabled:opacity-50 disabled:pointer-events-none " id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                    <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                    <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
                </div>
                <div id="hs-navbar-example" ref={hsNav} className="hidden transition-max-height duration-300 ease-in-out overflow-hidden sm:max-h-none sm:block ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}" aria-labelledby="hs-navbar-example-collapse">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="font-medium text-gray-900 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 link" href="#">Account</a>
                        <a className="font-medium text-gray-900 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 link" href="#">Work</a>
                        <a className="font-medium text-gray-900 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 link" href="#">Blog</a>
                        <a className="font-medium text-gray-900 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 link" href="https://intevia.fr/#contact">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;