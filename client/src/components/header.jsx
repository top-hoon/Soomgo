import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <nav class="header">
        <div class="logo"></div>
        <ul class="menu">
          <li><button>고수가입</button></li>
          <li>회원가입</li>
          <li>고수찾기</li>
          <li>로그인</li>
        </ul>
      </nav>
    )
  }
}

export default Header;