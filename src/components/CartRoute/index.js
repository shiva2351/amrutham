
import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Context from "../../context/Context";
import "./index.css"

class CartRoute extends Component{

    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="no"){
            changeTab("no")}
            return <div>
            <Header />
            <div className="cart-card">
            cart</div>
            <Footer />
        </div>
        }}
    </Context.Consumer>
    }
}

export default CartRoute