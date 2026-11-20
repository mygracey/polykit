import polykitsuit from "../../assets/polykit-suit-removebg.png"
import logo from "../../assets/polykit-removebg.png"
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"

import "./About.css"

function About(){

function openMenu(){
    const open=document.querySelector('.open')
    const close=document.querySelector('.close')
    const menu=document.querySelector('ul')

    menu.style.right="0";

    open.style.display="none"
    close.style.display="block"

}
function closeMenu(){
    const open=document.querySelector('.open')
    const close=document.querySelector('.close')
    const menu=document.querySelector('ul')

    menu.style.right="-200px";
    open.style.display="block"
    close.style.display="none"

}




    return (
        <section className="about">
             <div className="about-nav container">
                    <div className="logo">
                        <img src={logo} width="100"/>
                    </div>
                    <ul>
                        <Link to="/about" className="list">About</Link>
                        <Link to="/contact" className="list">Contact</Link>
                        <Link to="/login" className="list">Get started</Link>
                    </ul>

                    <FaBars className="about-icon open" onClick={openMenu}/>
                    <FaTimes className="about-icon close" onClick={closeMenu}/>
            </div>
         <div className="about-container container">
                
             
                <div className="card-left">
                     <h2>About PolyKit</h2>
            <h3 className="poly-top">Everything you need, all in one place.</h3>
            <p>PolyKit is an all-in-one productivity platform designed to make everyday digital tasks simpler, faster, and more convenient.
               From calculating figures and tracking personal tasks to taking notes, checking your BMI, and accessing useful everyday tools, PolyKit brings essential utilities together in one accessible space.
               Our goal is simple: to eliminate the need to switch between multiple applications for everyday activities by providing practical, easy-to-use tools in one place.
               Whether you're orgnaizing your day, managing personal tasks, or handling quick calculations, PolyKit is deisgned to help you stay organized, save time, and get things done with ease.
               
            </p>
             <h3 className="poly-below">PolyKit - Everyday tools. One convenient place.</h3>
            </div>
           

            <div className="card-right"><img src={polykitsuit} className="polykitsuitimage"/></div>
            </div>

                 
           
        </section>
    )
}

export default About