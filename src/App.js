import "./App.css";
import LoginPage from "./LoginPage"
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/loginpage" exact component={LoginPage}></Route>
        <Route path="/page1" exact component={Page1}></Route>
        <Route path="/page2" exact component={Page2}></Route>
        <Route path="/page3" exact component={Page3}></Route>
        <Route path="/" component={Menu}></Route> 
      </Switch> 
    </BrowserRouter>
  );
}
function Menu(){
  return(
    <div>
      <ul>
        <li>
          <Link to="/loginpage">Login Page</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
        <li>
          <Link to="/page3">Page3</Link>
        </li>
      </ul>
    </div>
  );
}
export default App;
