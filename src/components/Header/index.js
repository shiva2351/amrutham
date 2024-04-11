import {Component} from "react"
import "./index.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

class Header extends Component{

    render(){
        return <nav className="header"><ul className="header-ul">
            <Link to="/"><li>Karo abhayaas</li></Link>
            <li><ul className="header-ul2"><li><button type="button">Join us</button></li>
            <li>Classes</li>
            <li>Products</li>
            <li>About us</li>
            <li>profile</li></ul></li></ul>
            </nav>
    }
}

export default Header