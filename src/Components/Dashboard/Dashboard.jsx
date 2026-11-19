import {FaStickyNote,FaCalculator,FaTasks,FaWeight,FaCoins,FaMoneyBillWave} from "react-icons/fa";
import {Link,useNavigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../FirebaseConfig.js"
import {useState,useEffect} from "react"
import Navbar from "../Navbar/Navbar"

import "./Dashboard.css"

function Dashboard(){
    const navigate=useNavigate()
    const[user,setUser]=useState(null)

    useEffect(()=>{

        const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                navigate("/login")
            }
        })

        return ()=>unsubscribed()

    },[])


    return (
        
        <section className="dashboard">
            {user?<Navbar/>:""}
            <h1>Polykit - Everyday tools. One place</h1>
            <p>Small tools. Big convinience. Everything you need to get things done.</p>

            <div className="toolkit-wrapper container">
                
                <div className="card notepad">
                    
                    <div className="icon"><FaStickyNote className="fa"/></div>
                    <div className="desc">
                        <h4>Notepad</h4>
                        <p>Capture your thoughts, jot down quick ideas, and keep important note within easy reach.</p>
                        <Link to="/notepad" className="dash-link">Use Notepad</Link>
                    </div>
                    
                </div>
                


                
                <div className="card calculator">
                    <div className="icon"><FaCalculator className="fa"/></div>
                    <div className="desc">
                         <h4>Calculator</h4>
                    <p>Solve everyday calculations quickly and accuately with a simple tool designed to keep your numbers in check.</p>
                        <Link to="/calculator" className="dash-link">Use Calculator</Link>
                    
                    </div>
                   
                </div>

                
                
                <div className="card bmi-calculator">
                    <div className="icon"><FaWeight className="fa"/></div>
                    <div className="desc">
                         <h4>BMI Calculator</h4>
                    <p>Check your Body Mass Index in seconds and get a quick snapshot of how your weight relates to your height. </p>

                    <Link to="/bmiCalculator" className="dash-link">Use Bmi Calculator</Link>
                    </div>
                   
                </div>

                <div className="card task-manager">
                    <div className="icon"><FaTasks className="fa"/></div> 
                    <div className="desc">
                         <h4>Task Manager</h4>
                    <p>Organize your tasks, keep track of your priorities , and turn your daily plans into completed goals.</p>
                     <Link to="/tasks" className="dash-link">Task manager</Link>
                    </div>
                   
                </div>

                <div className="card currency-converter">
                    <div className="icon"><FaMoneyBillWave className="fa"/></div>
                    <div className="desc">
                        <h4>Currency Converter</h4>
                    <p>Convert between currencies with ease and get quick exchange-rate estimates for your everyday transactions.</p>
                       <Link to="/currency" className="dash-link">Currency converter</Link>
                    </div>
                    
                </div>

            </div>
        </section>
        
        
        
    )
}

export default Dashboard