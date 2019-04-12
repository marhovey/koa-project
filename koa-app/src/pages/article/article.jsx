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
    if (!this.props.appData.articleId) {
      return this.props.history.replace('/index')
    }
    this.setState({
      value: this.props.appData.articleId
    })
  }

  render() {
    return (
      <div className="Article">
        <p>这里是文章{this.state.value}的详情</p>
      </div>
    );
  }
}

export default Article;
