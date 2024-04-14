
import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Context from "../../context/Context";

class ProfileRoute extends Component{

    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="no"){
            changeTab("no")}
            return <div>
            <Header />
            <div className="profile-card">
                Profile
            </div>
           
            <Footer />
        </div>
        }}
    </Context.Consumer>
    }
}

export default ProfileRoute