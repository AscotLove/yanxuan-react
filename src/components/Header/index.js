import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './index.css';
class Header extends Component {

  render() {
    return <header>
      <div className="m-defaultBanner">
        <div className="brand">
          <div className="brand-logo">严选</div>
          <p>前往APP领1000元新用户现金礼包</p>
          <p>网易自营 品质生活</p>
        </div>
        <a className="w-button" href="/">打开APP</a>
      </div>
      <div className="m-indexHd">
        <div className="line">
          <h1>网易严选</h1>
          <input type="text" />
          <div className="loginBtn">登录</div>
        </div>
      </div>
    </header>
  }
}



export default Header;