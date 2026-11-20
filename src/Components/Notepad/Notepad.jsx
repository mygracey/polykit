
import {useState,useEffect} from "react"
import logo from "../../assets/polykit-removebg.png"
import noteImage from "../../assets/note1-removebg.png"
import {FaTrash,FaArrowLeft} from "react-icons/fa"
import {Link,useNavigate} from "react-router-dom"
import {onAuthStateChanged} from "firebase/auth"
import {auth,db} from "../FirebaseConfig.js"
import {push,ref,set,serverTimestamp,onValue} from "firebase/database"


import "./Notepad.css"




function Notepad(){
    


    const navigate=useNavigate()
    const[user,setUser]=useState(null)
    const[notes,setNotes]=useState("")
    const[noteList,setNoteList]=useState({})

    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{

            if(currentUser){
                setUser(currentUser.displayName)
                console.log(user)
            }

            else{
                navigate("/login")
            }
        })
        return ()=>unsubscribed()
    },[])



    function handleCreateNote(){
       let noteBoard=document.querySelector(".notepad-board")
       noteBoard.style.display="block"

      }


    function removeNotepad(){
        let noteBoard=document.querySelector(".notepad-board")
        noteBoard.style.display="none";
    }
   

    function saveNotes(){
     const user=auth.currentUser.uid
     console.log(user) 
     if(notes==""){
        alert("Please write something")
     }
     else{
        const noteDbRef=ref(db,`polykitdb/${user}/notes`)

        const newNote=push(noteDbRef)

     set(newNote,{
        note:notes,
        createdAt:Date.now()
           
     })
     alert("Note successfully saved")
     setNotes("")
     
     }
     
     
    }
    


    useEffect(()=>{

        const noteDbRef=ref(db,`polykitdb/${user}/notes`)

        const unsubscribed=onValue(noteDbRef,(snapshot)=>{
            
                const data=snapshot.val()
                
              
               setNoteList(data)
               
                 
        })

        return ()=>unsubscribed()

    },[])




    return (
        <section className="notepad-container">
             <Link to="/dashboard" className="dashboard-link"><FaArrowLeft/> Return to dashboard</Link>
            <img src={logo} width="100"/>
            <p className="notepad-text-con">NOTEPAD</p>
            <p className="welcome-text">Welcome back {user} !</p>
            <h2>Your thoughts beautifully organised.</h2>
            
            <p className="notepad-small-text">
                Capture ideas, save important information and keep your thoughts organized
                in one convenient space. From quick reminders to meaningful notes, everything deserves a place.
            </p>

            <img src={noteImage} width="100" />

            <button className="create-btn" onClick={handleCreateNote}>Create notes</button>

            <div className="notepad-board">
                <p className="note-content"  suppressContentEditableWarning={true} contentEditable="true" 
                 onInput={(e)=>{setNotes(e.currentTarget.textContent)}}></p>
                <FaTrash className="trash-icon" onClick={removeNotepad}/>
            </div>
            
            <button className="save-notes-btn" onClick={saveNotes}>Save notes</button>

            <div className="display-notes">
            
            {Object.entries(noteList).map(([id,value])=>{
                
            })}
            </div>

        </section>
    )
}

export default Notepad