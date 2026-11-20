import logo from "../../assets/polykit-removebg.png"
import {useState} from "react"
import "./Calculator.css"


function Calculator(){
    const[value,setValue]=useState("")
    return(
        <section className="poly-calculator">
            <img src={logo} width="100"/>
            <p className="calc-text-con">Calculator</p>
            <h2>Calculator with confidence.</h2>
            <p className="small-text">
                Make everything calculations simpler.
                Perform quick, accurate calculations with a clear and intuitive experience designed to keep things effortless.
            </p>


            <form>

                <div className="screen-container">
                    <input type="text" value={value} className="display-screen" />
                </div>

                <div>
                    <input type="button" value="AC"  onClick={e => setValue("")}/>
                    <input type="button" value="DE" onClick={e => setValue(value.slice(0,-1))}/>
                    <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className="last-buttons">
                    <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="=" className="equalto" onClick={e => setValue(eval?.(value))}/>
                    
                </div>

            </form>

        </section>
    )
}

export default Calculator