import React, { Component } from 'react';
import './index.scss';
import { dateFormat } from '../../utils/utils';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {
          title: '标题',
          desc: '描述描述描述描述',
          poster: 'sss',
          time: 1556628276700,
          id: '2001',
          tags: ['112', '212'],
          viewCnt: 10,
          commentCnt: 10
        },
        {
          title: '标题',
          desc: '描述描述描述描述',
          poster: 'sss',
          time: 1556628276700,
          id: '2002',
          tags: ['112', '212'],
          viewCnt: 10,
          commentCnt: 10
        },
        {
          title: '标题',
          desc: '描述描述描述描述',
          poster: 'sss',
          time: 1556628276700,
          id: '2003',
          tags: ['112', '212'],
          viewCnt: 10,
          commentCnt: 10
        }
      ],
      totalCnt: 10,
      pageSize: 10
    };
  }

  componentDidMount () {

  }

  goDetail (id) {
    this.props.articleId(id)
    this.props.history.push('/detail')
  }

  renderTags(data) {
    return data.map((val, ind) => {
      return (
        <span key={ind} className="tag">{val}</span>
      )
    })
  }

  renderList () {
    return this.state.dataList.map((val, ind) => {
      return (
        <div key={val.id} className="data-item">
          <div className="title">{val.title}</div>
          <div className="desc">{val.desc}</div>
          <div className="info">
            <div className="poster info-item">
              <img src="./imgs/writer.png" alt=""/>
              {val.poster}
            </div>
            <div className="tags info-item">
              <img src="./imgs/tags.png" alt=""/>
              {this.renderTags(val.tags)}
            </div>
            <div className="viewCnt info-item">
              <img src="./imgs/view.png" alt=""/>
              {val.viewCnt}
            </div>
            <div className="commentCnt info-item">
              <img src="./imgs/comment.png" alt=""/>
              {val.commentCnt}
            </div>
            <div className="time info-item">
              <img src="./imgs/time.png" alt=""/>
              {dateFormat(val.time)}
            </div>
          </div>
        </div>
      )
    })
  }

  renderPages() {
    
  }

  render() {
    return (
      <div className="index">
        <div className="data-list">
          {this.renderList()}
        </div>
        <div className="pager">
          <div className="pagination">
            <div className="prev page-item">
              <img src="./imgs/next.png" alt=""/>
            </div>
            {this.renderPages()}
            <div className="next page-item">
              <img src="./imgs/next.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
