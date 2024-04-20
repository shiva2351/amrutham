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
            return <div>
                <Head />
            <Header />
            <div className="doc-card">
            <div className="doc-card2">
                <h3>Find expert doctors for  an In-cinic session here</h3>
                <div>
                    <div >
                        <FaLocationDot /><select>
                            <option>hyderabad</option>
                            <option>mumbai</option>
                            <option>Delhi</option></select></div>
                    <div><input type="search" placeholder="eg: doctor,specialisation,clinic name"/>
                    <FaArrowRightLong /></div>
                    </div></div>
                <div>
                    bottom  card</div></div>
        </div>
        }}
    </Context.Consumer>
        
    }
}

export default DoctorsRoute