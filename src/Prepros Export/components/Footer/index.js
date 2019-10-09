import React, { Component } from 'react';



class Footer extends Component {

  render() {
    return <ul className="footerNav">
      <li>
        <router-link to="/Home" className="iconfont icon-fangzi">
        <span>
        主页
        </span>
        </router-link>
      </li>
      <li>
        <router-link to="/CateList/categoryGood/0" className="iconfont icon-cate">
        <span>
          菜单
        </span>
        </router-link>
      </li>
      <li>
        <router-link to="/Topic" className="iconfont icon-topic">
        <span>
          识物
        </span>
        </router-link>
      </li>
      <li>
        <a className="iconfont icon-ShoppingCartArrowDown">
        <span>
          购物车
        </span>
        </a>
      </li>
      <li>
        <router-link to="/User" className="iconfont icon-ucenter">
        <span>
          我的
        </span>
        </router-link>
      </li>
    </ul>
  }
}