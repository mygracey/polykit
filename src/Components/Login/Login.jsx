import {Link,useNavigate} from "react-router-dom"
import{signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import{useState,useEffect} from "react";
import{auth} from "../FirebaseConfig.js";
import {FaArrowLeft} from "react-icons/fa"

import logo from "../../assets/polykit-removebg.png"

import "./Login.css"

function Login(){
  const navigate=useNavigate()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[message,setMessage]=useState("")
  const[user,setUser]=useState(null)
  const[error,setError]=useState(null)
  const[success,setSuccess]=useState(null)



useEffect(()=>{
   const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
          
          setUser(currentUser)
          setSuccess("Good to have you back " + currentUser.displayName + " !")
          // setMessage(currentUser.email)
            
        }
        else{
          setError("Please sign Up!")
        }
   })
},[])


  

  async function handleLogin(e){
    e.preventDefault()

    if(email=="" || password==""){
      return;
    }
    else{
      try{
        await signInWithEmailAndPassword(auth,email,password).then((user)=>{
            if(user){
              setMessage("Hi " + email + " login successful!")
              setTimeout(()=>{
                navigate("/dashboard")
              },3000)
            }
            else{
              setMessage("Unknown user. Access denied!")
            }
        })
      }
      catch(error){
        console.log(error)
      }
    }

  }



    return(
        
      <div className="login-container">
        <Link to="/" className="home-page-link "><FaArrowLeft/> Return to home page</Link>
        <img src={logo} width="100"/>
        <h2>PolyKit - Login page</h2>
        <h3>{success}</h3>
        <p>Your everyday tools are just a sign-in away. Pick up right where you left off.</p>

        <form>
          <h3>{error}</h3>
          <h3>{message}</h3>
          <div className="form-control">
            <label htmlFor="Email address">Email address</label>
            <input type="text" placeholder="You@example.com" onChange={(e)=>{setEmail(e.target.value)}}/><br />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Create a password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
          </div>
          
          
          <button type="submit" onClick={handleLogin}>Sign in to PolyKit</button>
          <p className="account-text">New to PolyKit? Create an account <Link to="/register" className="login-link">Sign up</Link></p>
        </form>        
        
      </div>
    )
}

export default Login