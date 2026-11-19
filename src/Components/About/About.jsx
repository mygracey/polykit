import polykitsuit from "../../assets/polykit-suit-removebg.png"
import logo from "../../assets/polykit-removebg.png"

import "./About.css"
function About(){
    return (
        <section className="about container">
            <img src={logo} width="100"/>
            <img src={polykitsuit}/>
            <h2>About PolyKit</h2>
            <h3 className="poly-top">Everything you need, all in one place.</h3>
            <p>PolyKit is an all-in-one productivity platform designed to make everyday digital tasks simpler, faster, and more convenient.
               From calculating figures and tracking personal tasks to taking notes, checking your BMI, and accessing useful everyday tools, PolyKit brings essential utilities together in one accessible space.
               Our goal is simple: to eliminate the need to switch between multiple applications for everyday activities by providing practical, easy-to-use tools in one place.
               Whether you're orgnaizing your day, managing personal tasks, or handling quick calculations, PolyKit is deisgned to help you stay organized, save time, and get things done with ease.

               
            </p>
            <h3 className="poly-below">PolyKit - Everyday tools. One convenient place.</h3>
        </section>
    )
}

export default About