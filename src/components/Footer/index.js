import {Component} from "react"

import "./index.css"

class Footer extends Component{

    render(){
        return <nav className="footer"><ul className="footer-ul">
            <li><p>Karo abhayaas</p>
            <p>112 Electronic city</p>
            <p>Bangalore</p></li>
            <li><div>
                write something here
                <div>
                    <button type="button">contact us</button></div></div></li></ul></nav>
    }
}

export default Footer