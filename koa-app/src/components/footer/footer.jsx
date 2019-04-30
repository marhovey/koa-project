import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="copy">©2019 | 小码飞驰的个人博客 | 基于react</div>
        <div className="git">
          <a rel="noopener noreferrer"  target="_blank" href="https://github.com/marhovey">
            <img src="./imgs/git.png" alt=""/>
            git仓库
          </a>
        </div>
      </div>
    )
  }
}

export default Footer