import React, { Component } from 'react';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Cookies from './Cookies';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chipCount: 0 };
    this.incrementChipCount = this.incrementChipCount.bind(this);
  }

  incrementChipCount(evt) {
    this.setState(currState => ({
      chipCount: currState.chipCount + 1
    }));
    console.log('made it inside incrementChipCount');
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route
            exact
            path="/chips"
            render={() => (
              <Chips
                handleClick={this.incrementChipCount}
                count={this.state.chipCount}
              />
            )}
          />
          <Route exact path="/cookies" render={() => <Cookies />} />
        </Switch>
      </div>
    );
  }
}

export default App;
