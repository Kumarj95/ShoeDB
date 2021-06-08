import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>

     
    <div className="Container">

      <Navbar/>
      <Switch >
        
        <Route   exact path="/Search">
        {window.location.pathname}<br/>

          NOTHING
        </Route>
        <Route  path="/">

          pepee
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
