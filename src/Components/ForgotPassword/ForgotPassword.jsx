import {sendPasswordResetEmail} from "firebase/auth"
import logo from "../../assets/polykit-removebg.png"
import {auth} from "../FirebaseConfig.js"
import {useState} from "react"

import "./ForgotPassword.css"

function ForgotPassword(){

const[email,setEmail]=useState("")
const[message,setMessage]=useState("")
const[loading,setLoading]=useState(false)

 const emailPattern=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/

async function handlePasswordReset(e){
  
  e.preventDefault()  
   
    await sendPasswordResetEmail(auth,email).then((userEmail)=>{
        if(userEmail){
              setMessage("Reset password request sent successfully")  
        }
        else{
            setMessage("The email does not exist")
        }
    })
    
    
    

}
    return(
        <section className="forgotpassword container">
            <img src={logo} width="100"/>
            <h2>Reset your password.</h2>
            <p className="reset-small-text">Forgot your password? No worries. Enter your email 
                and we'll send you a secure link to get back in.</p>

            <form>
                <h3>{message}</h3>
                <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} autoComplete="off"/><br />
                <button onClick={handlePasswordReset}>Reset my password</button>
            </form>
        </section>
    )
}

export default ForgotPassword