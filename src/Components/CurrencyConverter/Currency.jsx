import {useState,useEffect} from "react";
import {FaArrowLeft} from "react-icons/fa"
import {onAuthStateChanged,signOut} from "firebase/auth"
import {auth} from "../FirebaseConfig.js"
import {useNavigate,Link} from "react-router-dom"




import logo from "../../assets/polykit-removebg.png"

import "./Currency.css"

function Currency(){
const navigate=useNavigate()
const[user,setUser]=useState(null)
const[amount,setAmount]=useState("1");
const[from,setFrom]=useState("USD")
const[to,setTo]=useState("NGN")
const[result,setResult]=useState(1450)


useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
               setUser(currentUser.displayName)
               console.log(currentUser.displayName)

        }
        else{
            navigate("/login")
        }
     
    })

    return ()=>unsubscribed()

},[])

// Our exchange rates

const rates={
    USD:1,
    NGN:1450,
    GBP:0.79,
    EUR:0.92
}


function convertCurrecncy(e){
    e.preventDefault()
    Number(amount)

    const answer=(amount/rates[from] * rates[to]);
    setResult(answer.toFixed(2))

}



function handleLogout(){
    signOut(auth)
    navigate("/")
}


    return (
        <section className="currency">
          <div className="logout_and_return_home">
                   <Link to="/dashboard" className="dashboard-link"><FaArrowLeft/> Return to dashboard</Link>
                   <button onClick={handleLogout}>Logout</button>
            </div>
             <img src={logo} width="100"/>
             <p className="welcome-text">Welcome back {user} !</p>
            <p className="currency-text-con">CURRENCY CONVERTER</p>
            <h2>Make every currency count.</h2>

            <p className="currency-small-text">
                Convert between currencies with ease. Get exchange-rate 
                information and make more informed decisions wherever your transactions
                take you.
            </p>

            <div className="currency-converter">
                <span className="enter-amount">Enter any amount</span>   

                <input type="text" value={amount} minLength={0} onChange={(e)=>{setAmount(e.target.value)}} required className="input" /> 
                <br /><br />
             

                <div className="selection-box">
                       <span className="span">From: </span>

                    <select value={from} onChange={(e)=>{setFrom(e.target.value)}}>
                    <option value="USD">US Dollar</option>
                    <option value="NGN">Nigerian Naira</option>
                    <option value="GBP">British Pound</option>
                    <option value="EUR">Euro</option>
                </select> 

                <br /><br />


                <span className="span">To: </span>

                <select value={to} onChange={(e)=>{setTo(e.target.value)}}>
                    <option value="USD">US Dollar</option>
                    <option value="NGN">Nigerian Naira</option>
                    <option value="GBP">British Pound</option>
                    <option value="EUR">Euro</option>
                </select> 

                <br /><br />

                <button onClick={convertCurrecncy} className="btn-convert">Convert Currency</button>

                </div>
                


                <h3 className="result">Conversion Rate: {result} {to} </h3>
                               
                 


            </div>

            
               
        </section>
    )
}

export default Currency