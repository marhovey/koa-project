import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iptVal: ''
    }
  }

  changeIpt(e) {
    this.setState({
      iptVal: e.target.value
    })
  }

  render () {
    return (
      <div className="header-wrapper">
        {/*<div className="header">*/}
          {/*<div className="icon">*/}
            {/*<img src="./imgs/icon.jpg" width={100} alt=""/>*/}
          {/*</div>*/}
          {/*<div className="name">小码飞驰的博客</div>*/}
        {/*</div>*/}
        <div className="nav">
          <div className="nav-tab">
            <div className="nav-tab-list">
              <div className="logo">
                <img src="./imgs/icon.jpg" width={20} alt=""/>
                <span>小码飞驰的博客</span>
              </div>
              <div className="nav-tab-item">
                <img src="" alt=""/>
                首页
              </div>
              <div className="nav-tab-item">
                <img src="" alt=""/>
                首页
              </div>
              <div className="nav-tab-item">
                <img src="" alt=""/>
                首页
              </div>
            </div>
            <div className="search-item">
              <div className="search-ipt">
                <input placeholder="请输入关键字" onChange={(e) => this.changeIpt(e)} type="text"/>
              </div>
              <div className="search-icon">
                <img src="./imgs/search.png" alt=""/>
              </div>
            </div>
            <div className="actions-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header