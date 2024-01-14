import React, { useContext, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { FaGitAlt } from 'react-icons/fa'
import { IoIosContact } from 'react-icons/io'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { MdOutlineDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { BsList } from 'react-icons/bs'

import "../styles/Nav.css"
import { ThemeContext } from '../App'

function Nav() {

    const { theme, setTheme } = useContext(ThemeContext);
    const linkStyle = `bg-transparent p-2 md:p-4 hover:bg-${(theme === "white") ? "white" : "black"} hover:text-${(theme === "white") ? "black" : "white"} rounded-2xl a-nav-item `;

    const [navDisplay, setNavDisplay] = useState("flex");

    const toggleTheme = () => {
        if (theme === "white") {
            setTheme("black");
        } else {
            setTheme("white");
        }
    }

    document.body.style.backgroundColor = (theme === "white") ? "white" : "#03011c";

    const toggleNav = () => {
        if (navDisplay === "flex") {
            setNavDisplay("hidden");
        } else {
            setNavDisplay("flex");
        }
    }
    return (
        <>
            <button className={`fixed z-50 top-8 right-8 text-3xl bg-${(theme === "white") ? "black" : "white"} text-${theme} rounded-lg shadow shadow-white md:hidden`} onClick={toggleNav}><BsList /></button>
            <nav className={`${navDisplay} bg-${(theme === "white") ? "black" : "gray-200"} text-${theme} shadow-lg shadow-${(theme === "white") ? "blue-500" : "teal-700"} text-xl px-2 py-2 gap-1 md:text-2xl w-max fixed md:px-7 md:py-3.5 left-1/2 md:gap-3 bottom-8 -translate-x-1/2 rounded-3xl`} id="navbar">
                <a href='#' className={linkStyle} ><AiOutlineHome /></a>
                <a href='#about' className={linkStyle} ><AiOutlineInfoCircle /></a>
                <a href='#skills' className={linkStyle} ><BiCodeAlt /></a>
                <a href='#projects' className={linkStyle} ><FaGitAlt /></a>
                <a href='#contact' className={linkStyle} ><IoIosContact /></a>
                <a href='https://drive.google.com/file/d/1Ir0dgDju3yNmgLa2VHw_UVT2t4RirKA_/view?usp=sharing ' target="_blank" rel="noreferrer" className={linkStyle} ><AiOutlineFilePdf /></a>
                <button onClick={toggleTheme} className={linkStyle} >{theme === "white" ? <MdOutlineDarkMode /> : <BsSun />}</button>
            </nav>
        </>
    )
}

export default Nav