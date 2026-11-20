
import {Link} from "react-router-dom"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {auth,db} from "../FirebaseConfig.js"
import {FaArrowLeft} from "react-icons/fa"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import logo from "../../assets/polykit-removebg.png"
import "./Register.css"

function Register(){
  const navigate=useNavigate()

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[cpassword,setCpassword]=useState("")
  const[message,setMessage]=useState("")


  const emailPattern=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/

  async function handleRegister(e){
    e.preventDefault()

    if(name=="" || email=="" || password=="" || cpassword==""){
      setMessage("Please fill in all fields.")
    }
    else if(password.length < 6){
      setMessage("Your password is too short")
    }
    else if(password.length > 12){
      setMessage("Your password is too long")
    }
    else if(emailPattern.test(email) && password.length == cpassword.length){
      const userCredential=await createUserWithEmailAndPassword(auth,email,password)
       console.log(userCredential)
      const user=userCredential.user 

      await updateProfile(user,{
        displayName:name
      })
    
      setMessage("Hi " + name + " your account has been successfully created!")
      console.log("Successful!")
      setTimeout(()=>{
        navigate("/login")
      },3000)
    }
    else{
      setMessage("Sorry, your registration request failed.")
    }

  }

    return(
          <div className="register-container">

            <Link to="/" className="home-page-link"> <FaArrowLeft/> Return to home page</Link>

                <img src={logo} width="100"/>  
                <h2>PolyKit - Registration page</h2>
                <h3>Everything you need. One place.</h3>
                <p>Create your PolyKit account and bring your everyday tools together in one simple workspace.</p>
            
        

        <form>
          <h3>{message}</h3>
          <div className="form-control">
            <label htmlFor="full name">Full name</label>
            <input type="text" placeholder="Enter your full name" autoComplete="off" onChange={(e)=>{setName(e.target.value)}}/><br />
          </div>
          <div className="form-control">
            <label htmlFor="Email address">Email address</label>
            <input type="text" placeholder="You@example.com" autoComplete="off" onChange={(e)=>{setEmail(e.target.value)}}/><br />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Create a password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
          </div>
          <div className="form-control">
            <label htmlFor="confirm password">Confirm password</label>
            <input type="password" placeholder="Confirm your password" onChange={(e)=>{setCpassword(e.target.value)}}/><br />
          </div>
          
          <button type="submit" onClick={handleRegister}>Create my account</button>

          <p className="account-text">Already have an account? <Link to="/login" className="register-link">Sign in</Link></p>
        </form>        
        
      </div>
    )
}


export default Register