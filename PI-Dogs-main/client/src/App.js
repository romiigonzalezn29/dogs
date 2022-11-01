import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreatedForm from './components/CreatedForm';
import DetailCard from './components/DetailCard';

function App() {
  return (
    <BrowserRouter> 
    
    <div className="App">
    
    <Switch>
    
      <Route exact path = '/' component={LandingPage}/>
      <Route path= '/home' component={Home}/>
      <Route exact path= '/dogs' component={CreatedForm}/>
      <Route exact path= '/dogs/:id' component={DetailCard}/>
      </Switch>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
