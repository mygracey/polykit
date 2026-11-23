
import {useState,useEffect} from "react"
import logo from "../../assets/polykit-removebg.png"
import noteImage from "../../assets/note1-removebg.png"
import {FaTrash,FaArrowLeft} from "react-icons/fa"
import {Link,useNavigate} from "react-router-dom"
import {onAuthStateChanged,signOut} from "firebase/auth"
import {auth,db} from "../FirebaseConfig.js"
import {push,ref,set,serverTimestamp,onValue} from "firebase/database"


import "./Notepad.css"




function Notepad(){
    


    const navigate=useNavigate()
    const[user,setUser]=useState(null)
    const[notes,setNotes]=useState("")
    const[noteList,setNoteList]=useState([])

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
        content:notes,
        createdAt:Date.now()
           
     })
     alert("Note successfully saved")
     setNotes("")
     
     }
     
     
    }
    


    useEffect(()=>{

        const noteDbRef=ref(db,`polykitdb/${user}/notes`)

        onValue(noteDbRef,(snapshot)=>{
            
              const data=snapshot.val();

              if(data){
                const saveNotes=Object.entries(data).map(([id,value])=>({
                    id:id,
                    ...value
                })
            );
            setNoteList(saveNotes)
            console.log("this is great")


              }else{
                setNoteList([])
              }




                 
        })

    

    },[])


function handleLogout(){
    signOut(auth)
    navigate("/")
}

    return (
        <section className="notepad-container">
            <div className="logout_and_return_home">
                   <Link to="/dashboard" className="dashboard-link"><FaArrowLeft/> Return to dashboard</Link>
                   <button onClick={handleLogout}>Logout</button>
            </div>
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
               {noteList.map((item)=>{
                return(
                     <ul>
                    <li key={item.id}>
                        <p>{item.content}</p>
                    </li>
                </ul>
                
                )
               
               })}
            </div>

        </section>
    )
}

export default Notepad