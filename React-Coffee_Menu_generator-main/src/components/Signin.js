import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState} from 'react';


import { auth } from './firebase'
import { signInWithEmailAndPassword } from "firebase/auth"


function Signin() {

    const navigate=useNavigate()

    const [email, setEmail]= useState("")
    const [password,setPassword]=useState("")

    const loginPage= async (e)=>{
                e.preventDefault()


                try {
                   await signInWithEmailAndPassword(auth, email, password)
                    alert("Welcome Back")
                    navigate("/Home")
                } catch (error) {
                    alert(error)
                    navigate("/Login")
                    
                }

    }


  return (
    <div><br/><br/>
        <div className="container w-auto p-3 h-auto inline-block "  >
                <div className="card p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
                    <div className="card-title text-center">
                        <h1><b>Log-In</b></h1>

                    </div>
                    <div className="card-body" >
                    <form onSubmit={loginPage} >
                    
                    <div className='mb-3'>
                    <label><EmailIcon/>Email</label>
                    <input type="email"  required class="form-control"  onChange={(e)=>{ setEmail(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
  
                    </div>
                    <div class="mb-3">
                                <label for="exampleInputPassword1"   class="form-label"><VisibilityIcon/>Password</label>
                                <input type="password"  onChange={(e)=>{ setPassword(e.target.value)}}  required class="form-control" id="exampleInputPassword1"/>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <div id="emailHelp" class="form-text  text-white">New User ,then <Link  to={"/Login"}><a href="">SigIn</a></Link> </div>
     
                            </form>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Signin




// 
// 