
import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Context from "../../context/Context";
import "./index.css"
import Head from "../Head";

class CartRoute extends Component{

    render(){
        return  <Context.Consumer>
        {(value)=>{
            const {changeTab,tabId}=value 
            if (tabId!=="cart"){
            changeTab("cart")}
            return <div>
                <Head/>
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