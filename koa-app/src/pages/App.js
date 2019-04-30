import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'
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
          <Header></Header>
          <div className="container">
            {routes}
          </div>
          <Footer></Footer>
        </div>
      </Provider>
    );
  }
}

export default App;
