import "../css/Allmenu.css"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"; 
import { Link } from "react-router-dom";



function Allmenu(){
  
  useEffect(()=>{
   
    AOS.init({offset:1,});
        })
    return(
<div>  
    <div className='container w-auto p-3 h-auto inline-block'>
            <div className='card p-3 mb-2 bg-dark bg-gradient text-white rounded-5'  >
                <div className='card-top text-center' data-aos="zoom-in" data-aos-duration="2000">
                    <div><img src={img1}></img><h3><b>Menu List</b></h3>
                  <button><Link to={"/Grid"}> <b>Buy</b></Link> </button>
                    </div>
                    <div><img src={img2}></img><h3><b> New Menu</b></h3><button><Link to={"/ImageUpload"}> <b>Buy</b></Link></button></div></div>
                    </div>
                    </div>
                    </div>
  
  
    )
}
export default Allmenu