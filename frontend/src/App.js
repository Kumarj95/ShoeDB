import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>

     
    <div className="Container">

      <Navbar/>
      <Switch >
        
        <Route path="/?q=">
            SEARCH PATH
        </Route>
        <Route exact path="/">
            BODY
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
