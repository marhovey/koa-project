import React, { Component } from 'react'
import './pager.scss'

class Pager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 6,
      totalPage: 8
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      totalPage: Math.ceil(nextProps.totalCnt / nextProps.pageSize),
      currentPage: nextProps.currentPage
    })
  }

  componentDidMount () {
    this.setState({
      totalPage: Math.ceil(this.props.totalCnt / this.props.pageSize),
      currentPage: this.props.currentPage
    })
  }

  renderPages () {
    const {currentPage, totalPage } = this.state
    let pages = []
    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(
          <div key={i} onClick={() => this.clickPage(i)} className={`page-item ${currentPage === i?'active':''}`}>
            {i}
          </div>
        )
      }
    } else {
      pages.push(
        <div key={1} onClick={() => this.clickPage(1)} className={`page-item ${currentPage === 1?'active':''}`}>
          {1}
        </div>
      )
      let end = currentPage + 2;
      let start = currentPage - 2;
      if (end > totalPage - 1) {
        end = totalPage - 1;
        start = end - 4;
      }
      if (start < 2) {
        start = 2;
        end = 6;
      }
      if (start > 2) {
        pages.push(
          <div key={999} onClick={() => this.clickPage(currentPage - 1)} className="page-item">
            ...
          </div>
        )
      }
      for (let i = start; i <= end; i++) {
        pages.push(
          <div key={i} onClick={() => this.clickPage(i)} className={`page-item ${currentPage === i?'active':''}`}>
            {i}
          </div>
        )
      }
      if (end < totalPage - 1) {
        pages.push(
          <div onClick={() => this.clickPage(currentPage + 1)} key={1000} className="page-item">
            ...
          </div>
        )
      }
      pages.push(
        <div key={totalPage} onClick={() => this.clickPage(totalPage)} className={`page-item ${currentPage === totalPage?'active':''}`}>
          {totalPage}
        </div>
      )
    }
    return pages
  }

  clickPage (page) {
    if (page < 1) {
      page = 1
    }
    if (page > this.state.totalPage) {
      page = this.state.totalPage
    }
    if (page !== this.state.totalPage) {
      this.setState({
        currentPage: page
      }, () => {
        this.props.currentChange(page)
      })
    }
  }

  render () {
    let {currentPage, totalPage} = this.state
    return (
      <div className="pager">
        <div className="pagination">
          <div onClick={() => this.clickPage(currentPage - 1)} className={`prev page-item ${currentPage === 1?'disabled':''}`}>
            <img src="./imgs/next.png" alt=""/>
          </div>
          {this.renderPages()}
          <div onClick={() => this.clickPage(currentPage + 1)} className={`next page-item ${currentPage === totalPage?'disabled':''}`}>
            <img src="./imgs/next.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Pager