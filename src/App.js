import "./App.css";
import Prototype from "./components/pages/Prototype";
import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <div>
      <HashRouter>
        <Layout>
          <Switch>
            {/* <Route path="/" component={Home}></Route>
            <Route path="/AboutUs" component={AboutUs}></Route>
            <Route path="/Prototype" component={Prototype}></Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/Prototype">
              <Prototype />
            </Route>
          </Switch>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
