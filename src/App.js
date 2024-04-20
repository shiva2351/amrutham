import { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home';
import LoginRoute from './components/LoginRoute';
import DoctorsRoute from './components/DoctorsRoute';
import RegisterRoute from './components/RegisterRoute';
import AboutRoute from './components/AboutRoute';
import Context from './context/Context';


class App extends Component {
  state={tabId:"no"}

  changeTab=(tab)=>{
      this.setState({tabId:tab})
  }

  render(){
    const {tabId}=this.state
    return <Context.Provider value={{tabId:tabId,changeTab:this.changeTab}}>
         
    <div className='App'>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/doctors" component={DoctorsRoute}/>
      <Route exact path="/about" component={AboutRoute}/>
      <Route exact path="/login" component={LoginRoute}/>
      <Route exact path="/sign-up" component={RegisterRoute}/>
      </Switch>
    </div>
  
    </Context.Provider>
    
}
}

export default App;
