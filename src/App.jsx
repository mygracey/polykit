import About from "./Components/About/About"
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword"
import HomePage from "./Components/HomePage/HomePage"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Notepad from "./Components/Notepad/Notepad"
import Task from "./Components/Task/Task"
import BMI from "./Components/BmiCalculator/Bmi"
import Calculator from "./Components/Calculator/Calculator"
import Currency from "./Components/CurrencyConverter/Currency"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Dashboard from "./Components/Dashboard/Dashboard"
import Errorpage from "./Components/Errorpage/Errorpage"



import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App(){
  
  return(
    <section className="app">
    
    <Router>
      {/* <Navbar/> */}
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/notepad" element={<Notepad/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/bmiCalculator" element={<BMI/>}/>
        <Route path="/currency" element={<Currency/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    <Footer />
    </Router>
     
    </section>
  )
}

export default App