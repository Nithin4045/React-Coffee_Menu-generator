

import { Link,useNavigate} from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


import { auth } from "./firebase";
import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"


function Login() {

    const navigate=useNavigate()

    const[name,setName]=useState()
    const[cpswd,setCpswd]=useState("")
    const [email, setEmail]= useState("")
    const [password,setPassword]=useState("")

    const signPage= async (e)=>{
        
        if(name.length<=5){
            alert("name should be greater then 5 letters")
        }else if(password!=cpswd){
            alert("password and confirmp-assword not matched")
        }else{
            alert("form successfully submitted")
        }

                e.preventDefault()
                try {
                   await createUserWithEmailAndPassword(auth, email, password)
                    alert("sign done Successfully")
                    navigate("/")
                } catch (error) {
                    alert(error)
                    
                }

    }


  return (
    <div><br/><br/>
        <div className="container w-auto p-3 h-auto inline-block "  style={{width:"500px" }}>
                <div className="card p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
                    <div className="card-title text-center">
                        <h1><b>Sign-In</b></h1>

                    </div>
                    <div className="card-body" >
                    <form onSubmit={signPage} >
                     
                    <div className='mb-3'>
                        <label><PersonIcon/> Name</label>
                        <input type="text" onChange={(e)=>{ setName(e.target.value)}} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                
                    </div>
                    <div className='mb-3'>
                    <label><EmailIcon/>Email</label>
                    <input type="email"  required class="form-control"  onChange={(e)=>{ setEmail(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
  
                    </div>
                    <div class="mb-3">
                                <label for="exampleInputPassword1"   class="form-label"><VisibilityIcon/>Password</label>
                                <input type="password"  onChange={(e)=>{ setPassword(e.target.value)}}  required class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><VisibilityOffIcon/>Confirm Password</label>
                                <input type="password" onChange={(e)=>{ setCpswd(e.target.value)}} required class="form-control" id="exampleInputPassword1"/>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <div id="emailHelp" class="form-text  text-white">Already have account ,then <Link to={"/Sigin"}><a href="">Login</a></Link></div>
      
                            </form>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Login

