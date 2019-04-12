import React, { Component } from 'react';
import './App.css';
import routes from '../router/index';
import { Provider } from 'react-redux';
import configStore from '../store';
const store = configStore();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {routes}
        </div>
      </Provider>
    );
  }
}

export default App;
