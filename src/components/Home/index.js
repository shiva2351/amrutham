import { Component } from "react";
import Header from "../Header";
import "./index.css"
import Context from "../../context/Context";
import Head from "../Head";

class Home extends Component{
    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="no"){
            changeTab("no")}
            return <div>
            <Head />
            <Header />
            <div className="home-div">
                <div className="home-div2">
                Home</div>
            </div></div>
        }}
    </Context.Consumer>
         
    }
}

export default Home