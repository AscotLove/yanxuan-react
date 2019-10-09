import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import './index.css';

@withRouter
class Footer extends Component {

  render() {
    console.log(this);
    if (this.props.location.pathname === '/home') return null;
    return <ul className="footerNav">
      <li>
        <Link to="/home" className="iconfont icon-fangzi">
        <span>
        主页
        </span>
        </Link>
      </li>
      <li>
        <Link to="/CateList/categoryGood/0" className="iconfont icon-cate">
        <span>
          菜单
        </span>
        </Link>
      </li>
      <li>
        <Link to="/topic" className="iconfont icon-topic">
        <span>
          识物
        </span>
        </Link>
      </li>
      <li>
        <a className="iconfont icon-ShoppingCartArrowDown">
        <span>
          购物车
        </span>
        </a>
      </li>
      <li>
        <Link to="/User" className="iconfont icon-ucenter">
        <span>
          我的
        </span>
        </Link>
      </li>
    </ul>
  }
}

export default Footer;