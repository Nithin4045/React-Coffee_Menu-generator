import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
    
            <a href="https://www.facebook.com/groups/ILoveCoffeeMore/" ><FacebookSharpIcon/></a> 
            <a href="https://www.youtube.com/watch?v=vFcS080VYQ0" ><YouTubeIcon/></a> 
            <a href="https://in.pinterest.com/search/pins/?q=coffee&rs=typed" ><PinterestIcon/></a> 
            <a href="https://www.instagram.com/cafesofbangalore/" ><InstagramIcon /> </a> 
           
      </div>
      <p> &copy; 2024 Coffee.com</p>
    </div>
  );
}

export default Footer;