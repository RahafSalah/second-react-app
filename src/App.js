import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h2>Welcome to App Component...</h2>
      <ul>
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
      <Switch>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
        <Route path="/page3" component={Page3}></Route>
        <Route path="/" component={null}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
