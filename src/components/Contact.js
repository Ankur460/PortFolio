import React, { useContext } from 'react'

import { ThemeContext } from '../App';

function Contact() {
    const {theme} = useContext(ThemeContext);


    return (
        <>
            <section id='contact' className='container mx-auto mt-6 lg:mt-16 p-0 mb-24 lg:mb-36'>
                <div className={`text-center text-${(theme === "white") ? "blue-700" : "amber-400"} text-3xl lg:text-6xl `}>Contact Me</div>
                <div className={` flex flex-col gap-2 md:gap-0 md:flex-row justify-evenly items-center md:text-2xl mt-4 md:mt-6 underline text-${(theme === "white") ? "blue-900" : "cyan-400"}`}>
                    <div className='contact-item'>
                        <i className="bi bi-envelope-fill"></i> <a href='mailto:ankurrai460@gmail.com' target='_blank' rel="noreferrer" >Mail</a>
                    </div>
                    <div className='contact-item'>
                        <i className="bi bi-github"></i><a href='https://github.com/Ankur460' target='_blank' rel="noreferrer" >Github</a>
                    </div>
                    <div className='contact-item'>
                        <i className="bi bi-linkedin"></i><a href='https://www.linkedin.com/in/ankur-rai460/' target='_blank' rel="noreferrer" >LinkedIn</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact