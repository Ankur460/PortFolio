import React,{useState,useEffect, useContext} from 'react'
import MainImg from '../assets/hero-img.svg'
import { ThemeContext } from '../App';

function Banner() {
    
    const [Thing, setThing] = useState("Software Engineer");
    const {theme} = useContext(ThemeContext);

    const things=["Software Engineer","Web Developer","Tech Enthusiast"]

    useEffect(() => {
        let i = 0;
        const id = setInterval(()=>{
            if(i>2){ i = 0;}
            setThing(things[i]);
            i++;
        },2000)
        
      return () => clearInterval(id);
      // eslint-disable-next-line
    }, [])

    return (
        <div className='container mx-auto h-full mt-24 p-0'>
            <div className='flex flex-col gap-20 md:flex-row md:gap-0 items-center justify-center'>
                <div className={`text-${(theme==="white")?"black":"white"} md:w-2/6 text-3xl lg:text-4xl ` } >
                    <h1>Hi !</h1>I'm <span className={`text-${(theme==="white")?"blue-700":"amber-400"} font-bold md:font-normal lg:text-5xl`}>Ankur Rai</span>,<br />a <span>{Thing}</span>
                </div>
                <div className='w-96 lg:w-3/6'>
                    <img src={MainImg} alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Banner