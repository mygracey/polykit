import {useState,useEffect} from "react"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../FirebaseConfig.js"
import logo from "../../assets/polykit-removebg.png"
import {Link,useNavigate} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa"

import "./Bmi.css"

function BMI(){
    const navigate=useNavigate()
    const[user,setUser]=useState(null)
    const[height,setHeight]=useState("")
    const[weight,setWeight]=useState("")
    const[result,setResult]=useState("")
    const[remark,setRemark]=useState("")
    const[message,setMessage]=useState("")

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
   

    function calculateBmi(e){
        e.preventDefault()
        if(weight && height){
            const heightInMeters=height / 100

            const yourbmi=(weight / (heightInMeters * heightInMeters)).toFixed(1)

            setResult(yourbmi)

                if(yourbmi < 18.0){
                    setRemark("You are underweight")
                }
                else if(yourbmi < 25.0){
                    setRemark("You are normal weight")
                }
                else if(yourbmi < 30){
                    setRemark("You are overweight")
                }
                else{
                    setRemark("You are obese.")
                }
                          
     }
       else{
        setMessage("Please enter your weight and height")
        }
        

    }

    return(
        <section className="bmi-container">
            <Link to="/dashboard" className="dashboard-link"><FaArrowLeft/> Return to dashboard</Link>
            <img src={logo} width="100" />
            <p className="welcome-text">Welcome back {user} !</p>
            <p className="bmi-text-con">BMI CALCULATOR</p>
            <h2>A little more insight into your health.</h2>
            <p className="bmi-small-text">Explore your Body Mass index using your height and weight. Get a quick BMI estimate and a general reference to help you
                better understand your body measurements.
            </p>

            <form>
                <h3 className="msg">{message}</h3>
                <input type="number" placeholder="Your weight in (kg) eg 60" onChange={(e)=>{setWeight(e.target.value)}}/><br />
                <input type="number" placeholder="Your height in (m) eg 170" onChange={(e)=>{setHeight(e.target.value)}}/><br />
                <button type="submit" onClick={calculateBmi}>Calculate your BMI</button>

                <p className="result">{result}</p>                             
                
                <p className="remark">{remark}</p>
            </form>

        </section>
    )
}
export default BMI