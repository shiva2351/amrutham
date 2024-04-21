import {Component} from "react"
import Header from "../Header"
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";

import Context from "../../context/Context"
import "./index.css"
import Head from "../Head"

class DoctorsRoute extends Component{

  

    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="pro"){
            changeTab("pro")}
            console.log('proroute')
            return <div className="doc">
                <Head />
            <Header />
            <div className="doc-card">
                <div className="doc-card2">
                    <h3 className="doc-para">Find expert doctors for  an In-cinic session here</h3>
                    <div className="doc-card3">
                        <div  className="doc-card4">
                            <FaLocationDot   className="icon-location" /><select className="doc-select">
                                <option>hyderabad</option>
                                <option>mumbai</option>
                                <option>Delhi</option></select></div>
                        <div   className="doc-card5">
                            <input className="doc-search" type="search" placeholder="eg: doctor,specialisation,clinic name"/>
                        <FaArrowRightLong    className="icon-arow"/>
                        </div>
                    </div>
                </div>
                <div>
                    bottom  card
                </div>
                </div>
            </div>
        }}
    </Context.Consumer>
        
    }
}

export default DoctorsRoute