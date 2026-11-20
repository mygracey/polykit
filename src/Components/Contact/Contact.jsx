import logo from "../../assets/polykit-removebg.png"
import{Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"


import "./Contact.css"

function Contact(){



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
        <section className="contact">
            <div className="contact-nav container">
                    <div className="logo">
                        <img src={logo} width="100"/>
                    </div>
                    <ul>
                        <Link to="/about" className="list">About</Link>
                        <Link to="/contact" className="list">Contact</Link>
                        <Link to="/login" className="list">Get started</Link>
                    </ul>

                    <FaBars className="contact-icon open" onClick={openMenu}/>
                    <FaTimes className="contact-icon close" onClick={closeMenu}/>
            </div>

             <div className="contact-container container">

                <div className="left-card">
                                  <h2>Let's Talk!</h2>
                        <p className="contact-text">Have a question, suggestion, or idea to make PolyKit even better? We'd love ❤ 
                            to hear from you! Whether you need help, have feedback, or simply want to say hi, our inbox is always open.

                            Your feedback matters. Lets make everyday productivity better, together!

                            Get in touch. We'd love to hear from you!
                        </p>
                </div>

           

            <div className="right-card">
                 <form>
                <input type="text" placeholder="your full name" /><br />
                <input type="text" placeholder="your email address" /><br />
                <input type="text" placeholder="your mobile number" /><br />

                <textarea placeholder="Leave a message here..."></textarea>
                <button>Send my message</button>
            </form>

            </div>
           


             </div>

           
        </section>
    )
}

export default Contact