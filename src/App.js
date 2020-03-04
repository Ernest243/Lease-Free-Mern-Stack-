import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import CarouselPage from './components/CarouselPage';
import InfoDetails from './components/InfoDetails';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (

      <Router>
          <div className="App">
            <NavBarMenu />
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/residentPortal" exact component={ LogIn }/>
              <Route path="/signUp" exact component={ SignUp }/>
          </Switch>
         </div>
      </Router>

    
    )
  }
}

const Home = () => (
  <div>
    <CarouselPage />
    <br /> <br />
    <InfoDetails />
    <br /> <br />
</div>
)


export default App;