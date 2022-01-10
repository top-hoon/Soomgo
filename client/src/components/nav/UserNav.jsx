import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/nav.css';

import Profile from '../../assets/images/0215f0ab-61fe-4273-8a1b-6d73d71ad38c.png';
import Secondary from '../../assets/images/secondary.svg';


function UserNav() {

  function profile(e) {
    if (document.querySelector('.profile-open').style.display == "none") {
      document.querySelector('.profile-open').style.display = "block";
      document.querySelector('.alram-open').style.display = "none";
    } else {
      document.querySelector('.profile-open').style.display = "none";
    }
  }

  function alram(e) {
    if (document.querySelector('.alram-open').style.display == "none") {
      document.querySelector('.alram-open').style.display = "block";
      document.querySelector('.profile-open').style.display = "none";
    } else {
      document.querySelector('.alram-open').style.display = "none";
    }
  }

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
        <div className="user-navi">
          <a className="pro-search" href="/ProSearch">고수찾기</a>
          <a className="received" href="/SentRequest">받은견적</a>
          <a className="chat" href="/Chat">
            채팅
            <span className="chat-count">17</span>
          </a>
          <span className="alram-btn" onClick={alram}></span>
          {/* alram toggle */}
          <div className="alram-open">
            <div className="alram-title">알림</div>
            <div className="alram-box">
              <ul className="alram-list">
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li className="alram-item">
                  <div className="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div className="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
              </ul>
            </div> 
          </div>
          {/* alram toggle */}


          <div className="profile" onClick={profile}>
            <img className="image" src={Profile} />
            <span className="downarrow"></span>
          </div>
          {/* profile toggle */}
          <div className="profile-open">
            <p className="name">홍길동 고객님</p>
            <ul className="control">
              <li><a className="sent-request" href="/SentRequest">받은 견적</a></li>
              <li><a className="mypage" href="/Mypage">마이페이지</a></li>
            </ul>
            <p className="secondary-btn"><img src={Secondary} />고수로 전환</p>
            <button className="logout-btn">로그아웃</button>
          </div>
          {/* profile toggle */}
        </div>
      </div>
    </nav>
  )
}

export default UserNav;