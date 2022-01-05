import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/nav.css';

function GuestNav() {
  return (
    <nav className="nav">
      <div className="left-section">
        <a href="/" className="logo"></a>
        <div className="service-searcher">
          <div className="input-prepend"></div>
          <input className="input-search" type="text" placeholder="어떤 서비스가 필요하세요?" />
        </div>
      </div>
      <div className="right-section">
        <div className="guest-navi">
          <a className="pro-search" href="/ProSearch">고수찾기</a>
          <a className="login" href="/Login">로그인</a>
          <a className="signup" href="/Signup">회원가입</a>
          <a className="pro-signup" href="pro-signup">고수가입</a>
        </div>
      </div>
    </nav>
  )
}

export default GuestNav;