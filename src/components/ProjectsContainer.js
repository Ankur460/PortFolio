import React, { useEffect,useContext } from 'react'

import Project from './Project';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ThemeContext } from '../App';


function ProjectsContainer() {
    const pagination = {
        clickable: true,
    };

    useEffect(() => {
        const bullets = document.querySelectorAll(".swiper-pagination-bullet")
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].style.backgroundColor = "black"
        }
    }, [])
    

    const {theme} = useContext(ThemeContext);

    if(theme==="black"){
        const bullets = document.querySelectorAll(".swiper-pagination-bullet")
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].style.backgroundColor = "white"
        }
    }
    if(theme==="white"){
        const bullets = document.querySelectorAll(".swiper-pagination-bullet")
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].style.backgroundColor = "black"
        }
    }

    const projectsList = [
       
        {
            projectName: "Movies App",
            projectDescLess: "Movies App is a responsive movies recommendation application in which a user can get the latest trending movies in various categories with features like infinite scroll add To favourites.",
            projectDescComplete:"Movies App is a responsive movies recommendation application in which a user can get the latest trending movies in various categories with features like infinite scroll and add To favourites. Tech Used - ReactJs, TailwindCSS. TMDB's api was used to gather movie data. Working on this project I got to learn react, react-router-dom and how hooks, components are used in an application, also learned how to consume third party API's in a project.  ",
            projectLink: "https://imdbclone-liard.vercel.app/",

        },
        {
            projectName: "Jira Ticket Clone",
            projectDescLess: "As the name suggests this is a Jira Ticket Clone, in which a user can create a Ticket, currently a user can  create, manage ,update and set the Priority of ticket.  ",
            projectDescComplete:"As the name suggests this is a Jira Ticket clone, in which a user can create a Ticket, a user can also lock,unlock for updating,deleting the Ticket, he can set the priority using the different color of the tickets. Tech Used - HTML, CSS and JavaScript. Working on this project improved my understanding of vanilla JavaScript, and how to create a boilerplate html so that can be used again and learn to manipulate the DOM.  ",
            projectLink: "https://ankur460.github.io/Jeera_Clone/",

        },
        {
            projectName: "Code Book",
            projectDescLess: "In most of the Coding interviews one needs to explain some algorithm and then code the same, so I created this website containing a whiteboard and a code editor so the interviewee does not need to switch applications back and forth.  ",
            projectDescComplete: "In most of the Coding interviews one needs to explain some algorithm and then code the same, so I created this website containing a whiteboard and a code editor so the interviewee does not need to switch applications back and forth. In Code Book a user can save their data, which includes the whiteboard content and the code. Created this website using HTML, CSS, JavaScript and Firebase. While working on this project I learned about server-less backends and how to use them.  ",
            projectLink: "https://code-book-fd505.firebaseapp.com/",

        }
    ]

    return (
        <>
            <section id='projects' className='container mx-auto mt-8 lg:mt-20 p-0'>
                <div className={`text-center text-${(theme === "white") ? "blue-700" : "amber-400"} text-3xl lg:text-6xl mb-6 md:mb-12`}>Projects</div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide ><Project projectName={projectsList[0].projectName} projectDescLess={projectsList[0].projectDescLess} projectDescComplete = {projectsList[0].projectDescComplete} projectLink={projectsList[0].projectLink} /></SwiperSlide>
                    <SwiperSlide ><Project projectName={projectsList[1].projectName} projectDescLess={projectsList[1].projectDescLess} projectDescComplete = {projectsList[1].projectDescComplete} projectLink={projectsList[1].projectLink} /></SwiperSlide>
                    <SwiperSlide ><Project projectName={projectsList[2].projectName} projectDescLess={projectsList[2].projectDescLess} projectDescComplete = {projectsList[2].projectDescComplete} projectLink={projectsList[2].projectLink} /></SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default ProjectsContainer