import logo from "../../assets/polykit-removebg.png"
import {Link,useNavigate} from "react-router-dom"
import {FaBars,FaTimes,FaHome,FaCalculator,FaMoneyBillWave,FaTasks,FaStickyNote,FaWeight,FaSignOutAlt} from "react-icons/fa"
import {useState,useEffect} from "react"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../FirebaseConfig.js"


import "./Navbar.css"


function Navbar(){
const navigate=useNavigate()


 function openMenu(){
  const menu=document.querySelector('ul')
  const open=document.querySelector('.open')
  const close=document.querySelector('.close')
        menu.style.right="0"
        open.style.display="none"
        close.style.display="block"
 } 
 function closeMenu(){
  const menu=document.querySelector('ul')
  const open=document.querySelector('.open')
  const close=document.querySelector('.close')
        menu.style.right="-200px"
        open.style.display="block"
        close.style.display="none"
 } 
  
const[user,setUser]=useState(null)

 useEffect(()=>{

    const unsub=onAuthStateChanged(auth,(currentUser)=>{

        if(currentUser){
            setUser(currentUser.displayName)
            console.log(currentUser.displayName)
        }
        else{
            navigate("/login")
        }

    })

    return ()=>unsub();

 },[])
   
 
    return (
        <nav className="navbar">
           
              <div className="logo"><img src={logo}/></div> 

                    <h3 className="loggedinUser">Welcome {user} !</h3>

            <ul className="menu">
                <Link to="/" className="list">
                    <FaHome className="navbar-icon"/>
                    <p>Home</p>
                </Link>
                <Link to="/notepad" className="list">
                    <FaStickyNote className="navbar-icon"/>
                    <p>Notepad</p>
                </Link>
                <Link to="/calculator" className="list">
                    <FaCalculator className="navbar-icon"/>
                    <p>Calculator</p>
                </Link>
                <Link to="/bmiCalculator" className="list">
                    <FaWeight className="navbar-icon"/>
                    <p>Bmi calculator</p>
                </Link>
                <Link to="/currency" className="list">
                    <FaMoneyBillWave className="navbar-icon"/>
                    <p>Currency converter</p>
                </Link>
                <Link to="/tasks" className="list">
                    <FaTasks className="navbar-icon"/>
                    <p>Task manager</p>
                </Link>
                <Link to="#" className="list">
                       <FaSignOutAlt className="navbar-icon"/>
                    <p>Sign out</p>
                </Link>
            
            </ul>

              <FaBars className="navbar-bars open" onClick={openMenu}/>
              <FaTimes className="navbar-bars close" onClick={closeMenu}/>
                                              
      </nav>
    )
}

export default Navbar