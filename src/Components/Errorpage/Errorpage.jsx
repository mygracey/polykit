import logo from "../../assets/polykit-removebg.png"
import {Link} from "react-router-dom";
import "./Errorpage.css"

function Errorpage(){
    return(
        <section className="errorpage">
            <img src={logo} width="100"/>
            <div className="error-text-con"><p>UNEXPECTED ERROR.</p></div>
            <h2>Well, this wasn't supposed to happen.</h2>
            <p className="main-text">Something interrepted your experience. We're sorry for the inconvinience. The page you're looking for 
                may be temporarily unavailble, or may not be available at all.
            </p>

            <button className="error-btn">Try again</button>
            <Link to="/" className="link">or return to your dashboard</Link>
            <p className="small-note">Still having trouble? Please try again in a moment</p>
        </section>
    )
}

export default Errorpage