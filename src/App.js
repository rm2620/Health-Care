import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donate from "./Donate";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Confirmation from "./Confirmation";
import Vaccine from "./components/App";
import Mental_health from "./Mental_health";

const promise = loadStripe(
  "pk_test_51KGTGJSIAbQMBzJkvWYTgDxvKVNgX3toZTAMTuERMnFzHJS2vMJGgYrhTlPWuB4Tb1rPCpAEo8lMf9bKFTYdkYdW00Q00Xpbnt"
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mental_health">
            <Mental_health />
            <Footer />
          </Route>
          <Route path="/vaccination">
            <Header />
            <Vaccine />
            <Footer />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
            <Footer />
          </Route>
          <Route path="/donate">
            <Donate />
            <Footer />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
