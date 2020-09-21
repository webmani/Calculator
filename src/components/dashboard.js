import React, {useEffect, useState} from "react"
import Calculator from "./calculator/calculator"
import Counter from "./counter/counter"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom"
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap"

function Dashboard(props) {
  const [timeLeft, setTimeLeft] = useState(300);
 
  useEffect(() => {
    if(timeLeft === 0 ){
       console.log("TIME LEFT IS 0");
       setTimeLeft(null);
       props.logginStatus && props.logginStatus(false); 
    }
    // exit early when we reach 0
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [timeLeft]);

  return (
    <div className="Dashbaord">
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/calculator">Calculator</Link>
            </NavItem>
            <NavItem>
              <Link to="/counter">Counter</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Redirect to="/calculator" />
          </Route>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/calculator" exact component={Calculator} />
          <Route path='/counter' component={() => <Counter countTime={timeLeft} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default Dashboard
