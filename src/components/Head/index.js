import {Component} from "react"
import "./index.css"
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { IoMdCart } from "react-icons/io";

import { CgProfile } from "react-icons/cg";
import Context from "../../context/Context";
import { HeaderList } from "./Styledcomponents";
import PopRoute from "../PopRoute";

class Head extends Component{

    render(){
        const {active}=this.props
        console.log(active)
        
        return <Context.Consumer>{value=>{
            const {tabId}=value
           
        return <nav className="head">
                 <ul className="head-ul">
            <Link to="/"><li className="head-logo">Karo abhayaas</li></Link>

            <li>
            <PopRoute />
            </li>

          </ul>
            </nav>}}</Context.Consumer>
    }
}

export default withRouter(Head)