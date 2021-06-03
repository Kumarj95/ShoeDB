import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>

     
    <div className="Container">

      <Navbar/>
      <Switch >
        
        <Route path="/?Search">
          <div>
            SEARCH PATH
          </div>
        </Route>
        <Route exact path="/">
          <div>
            BODY
          </div>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
