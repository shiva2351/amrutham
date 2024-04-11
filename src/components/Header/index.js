import {Component} from "react"
import "./index.css"
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { IoMdCart } from "react-icons/io";

import { CgProfile } from "react-icons/cg";

class Header extends Component{

    render(){
        return <nav className="header">
                 <ul className="header-ul">
            <Link to="/"><li className="header-logo">Karo abhayaas</li></Link>

            <li>
                <ul className="header-ul2">
                    <li><Link to="/register"><button type="button">Join us</button></Link></li>
            <Link to="/courses"><li>Classes</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/about"><li>About us</li></Link>
            <Link to="/profile"><li className="Header-pro-card"><CgProfile className="Header-pro" /></li></Link>
            <Link to="/cart"><li><IoMdCart/></li></Link></ul>
            </li>

          </ul>
            </nav>
    }
}

export default withRouter(Header)