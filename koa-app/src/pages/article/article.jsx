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
    console.log(this.props)
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
