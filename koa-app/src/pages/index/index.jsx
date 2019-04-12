import React, { Component } from 'react';
import './index.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  componentDidMount () {

  }

  goDetail (id) {
    this.props.articleId(id)
    this.props.history.push('/detail')
  }

  render() {
    return (
      <div className="Index">
        <header className="Index-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{ this.state.value }</p>
          <button
            onClick={() => this.goDetail('212221')}>详情</button>
        </header>
      </div>
    );
  }
}

export default Index;
