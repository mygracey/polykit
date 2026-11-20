import logo from "../../assets/polykit-removebg.png"
import{Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"
import {useState} from "react"


import "./Contact.css"

function Contact(){

const[result,setResult]=useState("")

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


const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d8791e4c-7cba-4570-8701-2b42d42f6c6e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    setTimeout(() => {
        window.location.reload()
    }, 3000);
  };



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
                 <form onSubmit={onSubmit}>
                <input type="text" placeholder="your full name" name="name" autoComplete="off" required /><br />
                <input type="text" placeholder="your email address" name="email"  autoComplete="off" required/><br />
                <input type="text" placeholder="your mobile number" name="mobile"  autoComplete="off" required/><br />

                <textarea placeholder="Leave a message here..." name="message" required></textarea>
                <button type="submit">Send my message</button>
                <p>{result}</p>
            </form>

            </div>
           


             </div>

           
        </section>
    )
}

export default Contact