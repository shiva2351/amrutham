
import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Context from "../../context/Context";
import "./index.css"

class CourseCard extends Component{

    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="class"){
            changeTab("class")}
            return <div>
            <Header />
            <div className="class-card">
            course</div>
            <Footer />
        </div>
        }}
    </Context.Consumer>
    }
}

export default CourseCard