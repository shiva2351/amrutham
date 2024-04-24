import {Component} from "react"
import "./index.css"
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min"

import Context from "../../context/Context";
import { HeaderList } from "./Styledcomponents";

class Header extends Component{

    render(){
        const {active}=this.props
        console.log(active)
        console.log("jeader")
        
        return <Context.Consumer>{value=>{
            const {tabId}=value
           
        return <nav className="header">
                 <ul className="header-ul">
            <Link to="/"><li className="header-logo"><img alt="" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1713526157/image_45_t8jes5.png"/></li></Link>

            <li>
                <ul className="header-ul2">
            <Link to="/"><HeaderList active={"class"===tabId}>Home</HeaderList></Link>
            <Link to="/doctors"><HeaderList active={"pro"===tabId}>Find Doctors</HeaderList></Link>
            <Link to="/about"><HeaderList active={"us"===tabId}>About us</HeaderList></Link>
           </ul>
            </li>
            <li>
                <ul className="header-ul3">
                    <li><Link to="/login"><button type="button">Login</button></Link></li>
                    
                    <li><Link to="/sign-up"><button type="button">Sign Up</button></Link></li>
            </ul>
            </li>

          </ul>
            </nav>}}</Context.Consumer>
    }
}

export default withRouter(Header)