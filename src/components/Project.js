import React, { useState, useContext } from 'react'

import jiraTicketlogo from '../assets/jiraTicketlogo.png'
import MovieImg from '../assets/movie.png'
import CodeImg from '../assets/codebook.png'
import { ThemeContext } from '../App';


function Project({ projectName, projectDescLess, projectDescComplete, projectLink }) {

    const [desc, setDesc] = useState(projectDescLess)
    const [read, setRead] = useState("Read More")
    const {theme} = useContext(ThemeContext);


    let projectImg;

    if (projectName === "Jira Ticket Clone") {
        projectImg = jiraTicketlogo;
    }
    else if (projectName === "Movies App") {
        projectImg = MovieImg
    }
    else if (projectName === "Code Book") {
        projectImg = CodeImg
    }


    const changeReadSize = () => {
        if (read === "Read More") {
            setRead("Read Less");
            setDesc(projectDescComplete);
        } else {
            setRead("Read More");
            setDesc(projectDescLess);
        }
    }

    return (
        <>
            <div className={`w-9/12 lg:w-5/6 m-auto mb-8 bg-${(theme === "white") ? "stone-200" : "zinc-700"} p-2   md:bg-transparent md:p-0`} >
            
                <img src={projectImg} className={`md:w-5/6 m-auto md:border-4 md:border-${(theme === "white") ? "black" : "white"} md:p-2 md:rounded-2xl hover:cursor-grab `} alt="Project" />
                <div className="mt-2 md:mt-6">
                    <h5 className={`text-${(theme === "white") ? "blue-600" : "emerald-400"} text-xl md:text-2xl md:font-bold`}>{projectName}</h5>
                    <p className={`text-${(theme === "white") ? "black" : "white"} md:mt-2 text-sm md:text-lg`}>{desc}<button className='text-blue-600 hover:cursor-pointer' onClick={changeReadSize} >{read}</button></p>
                    <a className={`md:text-lg hover:cursor-pointer underline text-${(theme === "white") ? "blue-900" : "cyan-400"}`} href={projectLink} target="_blank" rel="noreferrer">Live Demo<i className="bi bi-box-arrow-up-right ml-2"></i></a>
                </div>
            </div>
        </>
    )
}

export default Project