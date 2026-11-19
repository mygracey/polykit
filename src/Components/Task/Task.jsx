import logo from "../../assets/polykit-removebg.png"

import "./Task.css"

function Task(){
    return(
        <section className="task">
            <img src={logo} width="100"/>
            <p className="task-text-con">TASK MANAGER</p>
            <h2>Make room for what matters</h2>
            <p className="task-small-text">Bring structure to your day. Create tasks, oragnise priorities and keep track of your progress 
                width a simple workspace that helps you stay focused and productive
            </p>

            <div className="task-container">
                <h3>Today's priorities</h3>

                <form>
                    <input type="text" placeholder="Enter a task eg Learn Javascript" /><button>Add a task</button>
                </form>


            </div>
        </section>
    )
}

export default Task