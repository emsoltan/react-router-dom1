import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import About from "../components/pages/About";
import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Landing from "../components/pages/Landing"
import "../../src/App.css"

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <section className="content">
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route component={Error404} />
      </section>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
