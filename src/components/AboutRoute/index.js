import {Component} from "react"
import Footer from "../Footer"
import Header from "../Header"
import Head from "../Head";
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
                <Head />
            <Header />
            <div className="about-card">
            about</div>
            <Footer />
        </div>
        }}
    </Context.Consumer>
    }
}

export default AboutRoute