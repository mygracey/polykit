import logo from "../../assets/polykit-removebg.png"
import polykitsuit from "../../assets/polykit-suit-removebg.png"
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"

import "./HomePage.css"

function HomePage(){



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





    return(
        <section className="homepage">
            <div className="nav">
                    <div className="logo">
                        <img src={logo} width="100"/>
                    </div>
                    <ul>
                        <Link to="/about" className="list">About</Link>
                        <Link to="/contact" className="list">Contact</Link>
                        <Link to="/login" className="list">Get started</Link>
                    </ul>

                    <FaBars className="homepage-icon open" onClick={openMenu}/>
                    <FaTimes className="homepage-icon close" onClick={closeMenu}/>
            </div>
            <div className="homepage-container container">

                <div className="left-card">
                    <h1><span className="yellow">Everything</span> you need. One Powerful space.</h1>
                    <p className="homepage-para">Simplify your everyday tasks with PolyKit, a collection of practical tools designed to make daily
                        activities easier, faster, and more convenient. From calculating figures and tracking personal tasks to taking notes, checking BMI, and more, PolyKit brings
                        essential utilities together in one accessible platform.
                        
                    </p>
                    <Link to="/login" className="btn-homepage">Get started</Link>
                </div>
                <div className="right-card">
                    <img src={polykitsuit}/>
                </div>

            </div>
        </section>
    )
}

export default HomePage