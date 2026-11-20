
import {auth} from "../FirebaseConfig.js"
import {onAuthStateChanged} from "firebase/auth"
import {useState,useEffect} from "react"
import {useNavigate,Link} from "react-router-dom"
import {FaArrowLeft} from "react-icons/fa"
import logo from "../../assets/polykit-removebg.png"


import "./Task.css"

function Task(){
const[user,setUser]=useState(null)
const navigate=useNavigate()


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

},[])

    return(
        <section className="task">
            <Link to="/dashboard" className="dashboard-link"> <FaArrowLeft/> Return to dashboard</Link>
            <img src={logo} width="100"/>
            <p className="welcome-text">Welcome back {user} !</p>
            <p className="task-text-con">TASK MANAGER</p>
            <h2>Make room for what matters</h2>
            <p className="task-small-text">Bring structure to your day. Create tasks, oragnise priorities and keep track of your progress 
                width a simple workspace that helps you stay focused and productive
            </p>

            <div className="task-container">
                <h3>Today's priorities</h3>

                <form>
                    <input type="text" placeholder="Enter a task eg Learn Javascript" /><button>Add a task</button>
                </form>


            </div>
        </section>
    )
}

export default Task