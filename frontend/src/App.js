import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Home from './Screens/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
function App() {
  return (
    <Router>
      <div className="Container">
        <Navbar />
        <Switch>
          <Route exact path="/Search">
            <Search/>
          </Route>
          <Route path='/product/:id' component={ProductScreen}>
          </Route>
          <Route exact path="/" component={Home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
