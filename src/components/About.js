import React, { useContext } from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { BsFolderFill } from 'react-icons/bs'
import { FaVolleyballBall } from 'react-icons/fa'
import { ThemeContext } from '../App';

function About() {

    const { theme } = useContext(ThemeContext);



    const articleStyle = `h-28 w-11/12 md:w-full md:h-48 text-center flex flex-col md:grid gap-0 md:grid-rows-2 md:grid-cols-1 bg-${(theme === "white") ? "sky-900" : "stone-900"} md:p-1 hover:scale-105 duration-200 transition-ease-in-out rounded-b-xl md:rounded-b-3xl overflow-hidden shadow-md shadow-${(theme === "white") ? "black" : "white"}`

    const iconNameBox = `flex  md:flex-col justify-center items-center bg-${(theme === "white") ? "cyan-400" : "stone-200"} h-2/6 md:h-5/6 text-${theme} border-2 md:border-4 border-${(theme === "white") ? "black" : "amber-600"} shadow-2xl rounded-b-xl md:rounded-b-3xl`
    
    const smallText = `text-xsm text-white w-full text-center md:text-lg`;


    const scrollProject = () =>{
        document.getElementById('projects').scrollIntoView()
    } 
    const scrollSkills = () =>{
        document.getElementById('skills').scrollIntoView()
    }

    return (
        <>
            <section id='about' className='container  mx-auto mt-24 lg:mt-32 p-0'>
                <div className={`text-center text-${(theme === "white") ? "blue-700" : "amber-400"} text-3xl lg:text-6xl`}>About Me</div>
                <div className={`text-${(theme === "white") ? "black" : "white"} grid gap-4 md:gap-0 md:grid-cols-2 md:grid-rows-1 px-8 place-content-center place-items-center`}>
                    <div className=' m-auto mt-4 md:text-xl  lg:mt-8 lg:text-2xl' >
                        My name is Ankur Rai. I’m currently pursuing B.Tech in Electronics And Communication Engineering from Institute Of Engineering And Technology Lucknow . I see myself as a relentless problem-solver, and I’m always looking for a new challenge. I’ve recently gotten interested in Web Development using MERN stack. I have a high motivational spirit in terms of learning, seeking experiences. I am able to work well, honestly and responsibly. Passionate about computer science and how it can bring about changes in the world.
                    </div>
                    <div className='text-center grid gap-3 gap-y-6 md:gap-y-6 md:gap-6 md:w-5/6 grid-cols-2 grid-rows-1 place-content-center place-items-center m-0 md:text-xl lg:mt-8 lg:text-2xl' >
                        <article className={articleStyle}>
                            <div className={iconNameBox}>
                                <FaUserGraduate />
                                <h3 className=''>Education </h3>
                            </div>
                            <div className='px-4'>
                                <small className={smallText}>Electronics And Communication Engineering - (8.1 CGPA)</small>
                            </div>
                        </article>

                        <article className={articleStyle} onClick={scrollSkills}>
                            <div className={iconNameBox}>
                                <BsCodeSlash />
                                <h3 className=''>Experience with</h3>
                            </div>
                            <div className='px-4'>
                                <small className={smallText}>4 languages<br /> 5 frameworks/ libraries</small>
                            </div>
                        </article>

                        <article className={articleStyle} onClick={scrollProject}>
                            <div className={iconNameBox}>
                                <BsFolderFill />
                                <h3 className=''>Projects </h3>
                            </div>
                            <div className='px-4'>
                                <small className={smallText}>5+ projects</small>
                            </div>
                        </article>
                        
                        
                        <article className={articleStyle}>
                            <div className={iconNameBox}>
                                <FaVolleyballBall />
                                <h3 className=''>Sports </h3>
                            </div>
                            <div className='px-4'>
                                <small className={smallText}>VolleyBall <br />BasketBall</small>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About