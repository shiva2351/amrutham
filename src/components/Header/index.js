import {Component} from "react"
import "./index.css"

class Header extends Component{

    render(){
        const {active}=this.props
        console.log(active)
        console.log("jeader")
        
        return <div>header</div>
    }
}

export default Header