import Popup from 'reactjs-popup'
import { IoMenu } from "react-icons/io5";

import 'reactjs-popup/dist/index.css'
import "./index.css"
import Context from '../../context/Context';
import { HeaderList } from './Styledcomponents';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PopRoute = () => (
    <Context.Consumer>{value=>{
    const {tabId}=value 
    return<div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            < IoMenu />

          </button>
        }
      >
        {close => (
          
          <ul className="pop-ul2">
          <li><Link to="/register"><HeaderList active={"join"===tabId}>Join us</HeaderList></Link></li>
  <Link to="/courses"><HeaderList active={"class"===tabId}>Classes</HeaderList></Link>
  <Link to="/products"><HeaderList active={"pro"===tabId}>Products</HeaderList></Link>
  <Link to="/about"><HeaderList active={"us"===tabId}>About us</HeaderList></Link>
  <Link to="/profile"><HeaderList className="Header-pro-card"  active={"file"===tabId}>Profile</HeaderList></Link>
  <Link to="/cart"><HeaderList  active={"cart"===tabId}>Cart</HeaderList></Link></ul>
        )}
      </Popup>
    </div>}}</Context.Consumer>
   )

export default PopRoute