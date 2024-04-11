
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home';
import LoginRoute from './components/LoginRoute';
import ProductsRoute from './components/ProductsRoute';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <div className='App'>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/classes" component={CourseCard}/>
      <Route exact path="/products" component={ProductsRoute}/>
      <Route exact path="/login" component={LoginRoute}/>
      </Switch>
    </div>
  );
}

export default App;
