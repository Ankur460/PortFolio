import React, { useContext } from 'react'
import HTMLLogo from "../assets/htmllogo.png"
import CSSLogo from "../assets/csslogo.png"
import JSLogo from "../assets/jslogo.png"
import ReactLogo from "../assets/reactlogo.png"
import NodeLogo from "../assets/nodelogo.png"
import MongoLogo from "../assets/mongologo.jpg"
import FBLogo from "../assets/firebaselogo.png"
import CppLogo from "../assets/cpplogo.png"
import JavaLogo from "../assets/javalogo.png"
import TWLogo from "../assets/tailwindlogo.png"
import BSLogo from "../assets/bootstraplogo.png"
import GithubLogo from "../assets/githublogo.png"
import { ThemeContext } from '../App';


function Skills() {

    const {theme} = useContext(ThemeContext);
    
    const imgContainerStyle = 'w-20 lg:w-2/6 m-auto';
    const imgStyle = 'w-16 lg:w-full md:hover:scale-125 ease-in-out duration-200'

    return (
        <>
            <section id='skills' className='container mx-auto mt-8 lg:mt-20 p-0'>
                <div className={`text-center text-${(theme === "white") ? "blue-700" : "amber-400"}  text-3xl lg:text-6xl `} >Skills</div>
                <div className='grid gap-3 lg:gap-10 grid-cols-3 lg:grid-cols-4 place-content-center mt-8 lg:mt-16'>
                    <div className={imgContainerStyle} >
                        <img src={HTMLLogo} alt="html" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={CSSLogo} alt="css" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <a href='https://github.com/LakshayAggarwal25/JavaScript' target="_blank" rel="noreferrer">
                            <img src={JSLogo} alt="js" className={imgStyle} />
                        </a>
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={ReactLogo} alt="react" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={NodeLogo} alt="node" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={MongoLogo} alt="mongo" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={FBLogo} alt="firebase" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={CppLogo} alt="cpp" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={JavaLogo} alt="java" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={TWLogo} alt="tailwind" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={BSLogo} alt="bootstrap" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle}>
                        <img src={GithubLogo} alt="github" className={imgStyle} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills