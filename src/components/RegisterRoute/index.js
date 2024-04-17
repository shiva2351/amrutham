import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Header from "../Header"
import "./index.css"
import Head from "../Head"
import Context from "../../context/Context"


const RegisterRoute =()=>{
    const submitForm=(event)=>{
        event.preventDefault()
        console.log("form submited")
    }
    return <Context.Consumer>
    {(value)=>{
        const {changeTab,tabId}=value 
        if (tabId!=="join"){
        changeTab("join")}
        return <div><Head /><Header/>
    <div className="Register-card">
        <form  className="Register-form" onSubmit={submitForm}>
            <input className="Register-input" type="text" placeholder="NAME" />
            <input  className="Register-input" type="text" placeholder="EMAIL" />
            <div className="Register-card2"><div  className="Register-card3">
                <input  className="Register-input" type="text" placeholder="NUMBER" />
                <button type="button">SEND OTP</button></div>
                <p>Didn't receive it? <span>resend</span></p>
                <input  className="Register-input" type="text" placeholder="OTP"/>
            </div>
            <button className="Register-button" type="submit">SIGN UP</button>
            <p>Already Have An Account? <Link to="/login"><span>Log In</span></Link></p>
        </form>
    </div>
    </div>
}}
</Context.Consumer>
}

export default RegisterRoute