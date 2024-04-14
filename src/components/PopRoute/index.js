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
          
          <ul className="header-ul2">
          <li><Link to="/register"><button type="button">Join us</button></Link></li>
  <Link to="/courses"><HeaderList active={"class"===tabId}>Classes</HeaderList></Link>
  <Link to="/products"><HeaderList active={"pro"===tabId}>Products</HeaderList></Link>
  <Link to="/about"><HeaderList active={"us"===tabId}>About us</HeaderList></Link>
  <Link to="/profile"><HeaderList className="Header-pro-card">Profile</HeaderList></Link>
  <Link to="/cart"><HeaderList>Cart</HeaderList></Link></ul>
        )}
      </Popup>
    </div>}}</Context.Consumer>
   )

export default PopRoute