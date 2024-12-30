import React from 'react'
import "../css/About.css"
import Sideimg from "../images/sideimg.jpg"
import coffee from "../images/kkkkkkkkkkkkkkkkkk.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";  

function About() {
  
  useEffect(()=>{
    AOS.init({offset:1,});
        })
    
  return (
    <>
    <hr/>
    <div className="about">
    <div
      className="aboutTop"
      style={{ backgroundImage: `url(${coffee})` }} data-aos="zoom-in" data-aos-duration="2300"
    ></div>
    <div className="aboutBottom">
      <h1> ABOUT US</h1>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente
        officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.
        Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
        cumque velit
      </p>
    </div>
  </div>
  <hr/><br/>


    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Sideimg})` }}
      ></div>

      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form " method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div></div><br/>
      </>
  )
}


export default About;