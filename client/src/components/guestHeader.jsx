import React from 'react';
import '../components/css/common';
import '../components/css/guestHeader';

function GuestHeader() {
  return (
    <nav class="guest-header">
    <div class="left-section">
      <div class="logo"></div>
      <div class="service-searcher">
        <div class="input-prepend"></div>
        <input class="input-search" type="text" placeholder="어떤 서비스가 필요하세요?"></input>
      </div>
    </div>
    <div class="right-section">
      <div class="guest-navi">
        <span class="pro-search">고수찾기</span>
        <span class="login">로그인</span>
        <span class="user-regist">회원가입</span>
        <button class="pro-regist">고수가입</button>
      </div>
    </div>
  </nav>
  )
}

export default GuestHeader;