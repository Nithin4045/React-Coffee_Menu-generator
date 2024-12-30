import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import "../css/Grid.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";  

function Grid() {

  useEffect(()=>{
   
    AOS.init({offset:1,});
        })
  return (
    <div>
        <div className='container w-auto p-3 h-auto inline-block'>
            <div className='card p-3 mb-2 bg-dark bg-gradient text-white rounded-5'  >
                <div className='card-top text-center' data-aos="zoom-in" data-aos-duration="2000">
                    <div><img src={img1}></img><h3><b>Espresso</b></h3>
                  <button><Link to={"/Menu1"}> <b>Buy</b></Link> </button>
                    </div>
                    <div><img src={img2}></img><h3><b>Vietnamese  coffee</b></h3><button><Link to={"/Menu2"}> <b>Buy</b></Link></button></div>
                    <div><img src={img3}></img><h3><b>Nitro cold brew</b></h3><button><Link to={"/Menu3"}> <b>Buy</b></Link></button></div>
                    
                    
                    </div>
                <div className='card-bottem text-center' data-aos="zoom-in" data-aos-duration="2000">
                
                <div>
                    <img src={img4}></img>
                    <h3><b>Mocha</b></h3>
                <button><Link to={"/Menu4"}> <b>Buy</b></Link></button>
                </div>

                <div><img src={img5}></img><h3><b>Hazelnut</b></h3>
                <button><Link to={"/Menu5"}> <b>Buy</b></Link></button></div>

                <div><img src={img6}></img><h3><b>Amaretto</b></h3>
                <button><Link to={"/Menu6"}> <b>Buy</b></Link></button></div>
                
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid