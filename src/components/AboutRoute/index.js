import {Component} from "react"
import Footer from "../Footer"
import Header from "../Header"
import Context from "../../context/Context"

import "./index.css"

class AboutRoute extends Component{

    render(){
        return <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="us"){
            changeTab("us")}
            return <div>
            <Header />
            <div className="about-card">
            abou</div>
            <Footer />
        </div>
        }}
    </Context.Consumer>
    }
}

export default AboutRoute