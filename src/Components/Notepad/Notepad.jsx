
import {useState} from "react"
import logo from "../../assets/polykit-removebg.png"
import noteImage from "../../assets/note1-removebg.png"
import {FaTrash} from "react-icons/fa"

import "./Notepad.css"

function Notepad(){



    function handleCreateNote(){
       let noteBoard=document.querySelector(".notepad-board")
       noteBoard.style.display="block"
    }


    function removeNotepad(){
        let noteBoard=document.querySelector(".notepad-board")
        noteBoard.style.display="none";
    }
    return (
        <section className="notepad-container">
            <img src={logo} width="100"/>
            <p className="notepad-text-con">NOTEPAD</p>
            <h2>Your thoughts beautifully organised.</h2>
            <p className="notepad-small-text">
                Capture ideas, save important information and keep your thoughts organized
                in one convenient space. From quick reminders to meaningful notes, everything deserves a place.
            </p>

            <img src={noteImage} width="100" />

            <button className="create-btn" onClick={handleCreateNote}>Create notes</button>

            <div className="notepad-board">
                <p className="note-content" contentEditable="true"></p>
                <FaTrash className="trash-icon" onClick={removeNotepad}/>
            </div>


        </section>
    )
}

export default Notepad