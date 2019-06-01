import React, { Component } from 'react';
import './article.scss';
import httpServer from './http'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
    this.$http = httpServer()
    for (let i of Object.keys(this.$http)) {
      this.$http[i] = this.$http[i].bind(this)
    }
  }

  componentDidMount () {
    this.$http.getDetail(this.props.match.params.id)
  }

  render() {
    return (
      <div className="Article">
        <div className="title">{this.state.article.title}</div>
        <div
          dangerouslySetInnerHTML={{__html: this.state.article.content}}></div>
      </div>
    );
  }
}

export default Article;
