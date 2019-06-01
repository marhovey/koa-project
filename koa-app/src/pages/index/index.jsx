import React, { Component } from 'react';
import './index.scss';
import { dateFormat } from '../../utils/utils';
import Pager from '../../components/pager/pager.jsx';
import httpServer from './http';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      totalCnt: 0,
      pageSize: 10,
      currentPage: 1,
    };
    this.$http = httpServer()
    for (let i of Object.keys(this.$http)) {
      this.$http[i] = this.$http[i].bind(this)
    }
  }

  componentDidMount () {
    this.$http.getTableList({
      pageNum: this.state.currentPage - 1,
      pageSize: this.state.pageSize
    })
    console.log('mounted index')
  }

  goDetail (id) {
    this.props.history.push(`/detail/${id}`)
  }

  renderTags(tags) {
    let data = tags.split(";")
    return data.map((val, ind) => {
      return (
        <span key={ind} className="tag">{val}</span>
      )
    })
  }

  renderList () {
    return this.state.dataList.map((val, ind) => {
      return (
        <div key={val.id} className="data-item" onClick={() => this.goDetail(val.art_id)}>
          <div className="title">{val.title}</div>
          <div className="desc">{val.description}</div>
          <div className="info">
            <div className="poster info-item">
              <img src="./imgs/writer.png" alt=""/>
              {val.writer}
            </div>
            <div className="tags info-item">
              <img src="./imgs/tags.png" alt=""/>
              {this.renderTags(val.tags)}
            </div>
            <div className="viewCnt info-item">
              <img src="./imgs/view.png" alt=""/>
              {val.views}
            </div>
            <div className="commentCnt info-item">
              <img src="./imgs/comment.png" alt=""/>
              {val.commentCnt}
            </div>
            <div className="time info-item">
              <img src="./imgs/time.png" alt=""/>
              {dateFormat(val.tWhen)}
            </div>
          </div>
        </div>
      )
    })
  }

  currentChange(data) {
    this.setState({
      currentPage: data
    }, () => {
      this.$http.getTableList({
        pageNum: this.state.currentPage - 1,
        pageSize: this.state.pageSize
      })
    })
  }

  render() {
    return (
      <div className="index">
        <div className="data-list">
          {this.renderList()}
        </div>
        <Pager
          totalCnt={this.state.totalCnt}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          currentChange={(data) => this.currentChange(data)}></Pager>
      </div>
    );
  }
}

export default Index;
