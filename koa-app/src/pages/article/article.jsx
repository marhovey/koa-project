import React, { Component } from 'react';
import './article.less';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  componentDidMount () {

  }

  render() {
    return (
      <div className="Article">
        <p>这里是文章想请</p>
      </div>
    );
  }
}

export default Article;
