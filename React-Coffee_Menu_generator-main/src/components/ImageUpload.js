
import React, { useState } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import {  Link, useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const [image, setImage] = useState(null); // To store the image URL
  const [imageName, setImageName] = useState(''); // To store the image name

  const navigation =useNavigate()
  
  
  const[name,setName]=useState()
  const[price,setprice]=useState("")



const postData=(e)=>{
e.preventDefault()
const obj={name,price}

fetch("http://localhost:3007/ImageUpload",{method:"post",
  headers:{"Content-type":"application/json"},
  body:JSON.stringify(obj)
})
.then(()=>{
    alert("Menu data is Uploading")
    navigation("/Menudata")
}).catch(()=>{
  alert(" fail  posted menu data")
})







}


  // Handle file selection
  const handleFileChange = (event) => {
    
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the image
      setImage(imageUrl); // Set the image URL to state
      setImageName(file.name); // Set the file name to state
    }
  };

  return (
    <div>




      <div className='flex-contant' style={{display:"flex",justifyContent:"end"}}>
    <div>
      <h2>Upload an Image</h2>

      {/* File input to select the image */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {image && (
        <div>
          
          <h3>Uploaded Image</h3>
          {/* Display the image */}
          <img src={image} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
          <p>Image Name: {imageName}</p>
        </div>  
        
      )}
    </div>
    {/* contant */}
    <div className='container  w-25 p-3 h-50 inline-block'>
      <div className='card p-3 mb-2 bg-dark bg-gradient text-white rounded-5'>
        <div className='card-title text-center'><b><h3>Details</h3></b></div>
        <div className='card-body'> 
          
          <form onSubmit={postData}>

          <div className='disable' style={{visibility:"hidden"}}>            
          <lable><b>ID</b></lable>
          <input placeholder='Enter the prodect Name' disabled="disabled" required type='text' aria-describedby="emailHelp" /></div>
          

          <div className='mb-3 text-center'>            
          <lable><b>Name of Prodect :-</b></lable>
          <input placeholder='Enter the prodect Name' value={name} onChange={(e)=>{setName(e.target.value)}} required type='text' aria-describedby="emailHelp" /></div>
          
          <div className='mb-3 text-center'>
          <lable><b>Enter your Prodect price :-</b></lable>
          <input placeholder='Enter the prodect Name'value={price } onChange={(e)=>{setprice(e.target.value)}}  required type='text' aria-describedby="emailHelp"/></div>
          
          <button type="submit" class="btn  btn-primary ">Submit</button>
          </form></div>
      </div>
    </div>
    <br/>
    {/* preview */}
    <div className='container w-25 h-auto inline-block'>
      <div className='card text-center p-3 mb-2 bg-dark bg-gradient text-white rounded-5'>
        <div className='card-title text-center'><b><h2>Preview</h2></b></div>
        <div className='card-body ' >

          <div className='img-body ' style={{ width: '200px', height: 'auto' }}>
            
          <img src={image} alt="Uploaded" style={{ width: '200px', height: 'auto',justifyContent:"center" }} />
          </div><hr/>
          <div className='remaining-body'>
            <div>
              <label><b><h4>Name : </h4></b>{name}</label></div><hr/>
              <div><label><b><h4>Price (<CurrencyRupeeIcon/>) :</h4></b>{price}</label></div>
          </div>

        </div>
      </div>
      
    </div>
    </div>

<div className="btn">
 <Link to={"/Menudata"}><button type="submit" class="btn  btn-primary ">View All Menu Data</button></Link> 
</div>
    </div>
  );
};

export default ImageUpload;
