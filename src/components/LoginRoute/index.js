import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Header from "../Header"



const LoginRoute =()=>{
    const submitForm=(event)=>{
        event.preventDefault()
        console.log("form submited")
    }
    return <div><Header/>
    <div className="Register-card">
        <form  className="Register-form" onSubmit={submitForm}>
            <input className="Register-input" type="text" placeholder="USER" />
            <input  className="Register-input" type="text" placeholder="PASSWORD" />
            <button className="Register-button" type="submit">LOGIN</button>
            <p>Don't have an account? <Link to="/Register"><span>Register</span></Link></p>
        </form>
    </div>
    </div>
}

export default LoginRoute