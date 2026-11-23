
import {auth,db} from "../FirebaseConfig.js"
import {onAuthStateChanged,signOut} from "firebase/auth"
import {useState,useEffect} from "react"
import {useNavigate,Link} from "react-router-dom"
import {FaArrowLeft} from "react-icons/fa"
import {push,set,ref,onValue,remove} from "firebase/database"
import logo from "../../assets/polykit-removebg.png"


import "./Task.css"




function Task(){

const taskUser=auth.currentUser;

const[task,setTask]=useState("")
const[tasklist,setTaskList]=useState([])
const[user,setUser]=useState(null)
const[message,setMessage]=useState("Add some tasks today.")
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




// Displat data on your screen







function handleLogout(){
    signOut(auth)
    navigate("/")
}

    return(
        <section className="task">
          <div className="logout_and_return_home">
                   <Link to="/dashboard" className="dashboard-link"><FaArrowLeft/> Return to dashboard</Link>
                   <button onClick={handleLogout}>Logout</button>
            </div>
            <img src={logo} width="100"/>
            <p className="welcome-text">Welcome back {user} !</p>
            <p className="task-text-con">TASK MANAGER</p>
            <h2>Make room for what matters</h2>
            <p className="task-small-text">Bring structure to your day. Create tasks, oragnise priorities and keep track of your progress 
                width a simple workspace that helps you stay focused and productive
            </p>

            <div className="task-container">
                <h3>{message}</h3>

                <form>
                    
                    <input type="text" placeholder="Enter a task eg Learn Javascript" onChange={(e)=>{setTask(e.target.value)}}/>
                    <br />
                    <button>Add a task</button>
                </form>

                <div className="display-task-board">
                    
                   
                </div>

            </div>
        </section>
    )
}

export default Task