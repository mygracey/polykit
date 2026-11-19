import {useState} from "react";



import logo from "../../assets/polykit-removebg.png"

import "./Currency.css"

function Currency(){

const[amount,setAmount]=useState("1");
const[from,setFrom]=useState("USD")
const[to,setTo]=useState("NGN")
const[result,setResult]=useState(1450)

// Our exchange rates

const rates={
    USD:1,
    NGN:1450,
    GBP:0.79,
    EUR:0.92
}


function convertCurrecncy(e){
    e.preventDefault()
    Number(amount)

    const answer=(amount/rates[from] * rates[to]);
    setResult(answer.toFixed(2))

}



    return (
        <section className="currency">
            <img src={logo} width="100"/>
            <p className="currency-text-con">CURRENCY CONVERTER</p>
            <h2>Make every currency count.</h2>

            <p className="currency-small-text">
                Convert between currencies with ease. Get exchange-rate 
                information and make more informed decisions wherever your transactions
                take you.
            </p>

            <div className="currency-converter">
                <span className="enter-amount">Enter any amount</span>   

                <input type="text" value={amount} minLength={0} onChange={(e)=>{setAmount(e.target.value)}} required className="input" /> 
                <br /><br />
             

                <div className="selection-box">
                       <span className="span">From: </span>

                    <select value={from} onChange={(e)=>{setFrom(e.target.value)}}>
                    <option value="USD">US Dollar</option>
                    <option value="NGN">Nigerian Naira</option>
                    <option value="GBP">British Pound</option>
                    <option value="EUR">Euro</option>
                </select> 

                <br /><br />


                <span className="span">To: </span>

                <select value={to} onChange={(e)=>{setTo(e.target.value)}}>
                    <option value="USD">US Dollar</option>
                    <option value="NGN">Nigerian Naira</option>
                    <option value="GBP">British Pound</option>
                    <option value="EUR">Euro</option>
                </select> 

                <br /><br />

                <button onClick={convertCurrecncy} className="btn-convert">Convert Currency</button>

                </div>
                


                <h3 className="result">Conversion Rate: {result} {to} </h3>
                               
                 


            </div>

            
               
        </section>
    )
}

export default Currency