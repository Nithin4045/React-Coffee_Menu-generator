import React from 'react'
import "../css/Home.css"
import hero1 from "..//images/hero.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Link} from "react-router-dom"

import { useEffect } from "react";  

function Home() {
    useEffect(()=>{
        AOS.init({offset:1,});
            })
  return (
    <div><hr/>
        <section className="hero">
            
            <div className="hero-text">
                <h5 data-aos="fade-right" data-aos-duration="2300"> #Coffee for hot Day</h5>
                <h1 data-aos="zoom-in-left" data-aos-duration="2300" data-aos-delay="200">
                    Cold Brew
                </h1>
                <p data-aos="fade-right" data-aos-duration="2300" data-aos-delay="300"> a well-balanced acidity, bitterness, sweetness, and mouthfeel combined with a dreamy aroma
                   </p>
                   <div className="main-body"  data-aos="flip-down" data-aos-duration="2500" data-aos-delay="300">
                   <Link to={"/Grid"} ><a href="#" className="btn">Order Now</a></Link>
                    <a href="#" className="price"> <span>Start withs </span>
                     - ₹ 199.00 | <span>Regular Price</span></a> </div>
                   
            </div>
            
            <div className="hero-img"  data-aos="zoom-in" data-aos-duration="2300" >
                <img src={hero1}></img>
            </div>
            
        </section>
        <div className="icons">
            <a href="https://www.facebook.com/groups/ILoveCoffeeMore/" data-aos="fade-in" data-aos-duration="2300" data-aos-delay="600"><FacebookSharpIcon/></a> 
            <a href="https://www.youtube.com/watch?v=vFcS080VYQ0" data-aos="fade-in" data-aos-duration="2300" data-aos-delay="600"><YouTubeIcon/></a> 
            <a href="https://in.pinterest.com/search/pins/?q=coffee&rs=typed" data-aos="fade-in" data-aos-duration="2300" data-aos-delay="600"><PinterestIcon/></a> 
            </div>
            <div className="scroll" data-aos="zoom-out-down" data-aos-duration="2300" data-aos-delay="550">
                
             <div className="last">Akshay kumar</div>
    </div>
    </div>
  )
}

export default Home