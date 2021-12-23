import React from 'react';
import '../components/css/common';
import '../components/css/userHeader';

function UsertHeader() {
  return (
    <nav class="user-header">
      <div class="left-section">
        <div class="logo"></div>
        <div class="service-searcher">
          <div class="input-prepend"></div>
          <input class="input-search" type="text" placeholder="어떤 서비스가 필요하세요?"></input>
        </div>
      </div>
      <div class="right-section">
        <div class="user-navi">
          <span class="pro-search">고수찾기</span>
          <span class="received">받은견적</span>
          <span class="chat">
            채팅
            <span class="chat-count">17</span>
          </span>
          <span class="alram-btn"></span>

          {/* 알람 토글 박스 */}
          <div class="alram-open" style="display: none">
            <div class="alram-title">알림</div>
            <div class="alram-box">
              <ul class="alram-list">
                <li class="alram-item">
                  <div class="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div class="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li class="alram-item">
                  <div class="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div class="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li class="alram-item">
                  <div class="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div class="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li class="alram-item">
                  <div class="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div class="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
                <li class="alram-item">
                  <div class="alram-date">
                    <span>알림</span>
                    <span>2주 전</span>
                  </div>
                  <div class="alram-content">
                    <p>일본어(일어) 과외요청서가 도착했어요</p>
                    <p>박혜진님의 일본어(일어) 과외 요청서가 도착했어요. 지금 바로 확인해보세요.</p>
                  </div>
                </li>
              </ul>
            </div> 
          </div>
          {/* 알람 토글 박스 */}

          <div class="user-profile">
            <img class="user-image" src="images/05463c1e-4ba6-4250-b039-6781cf891093.jpg"></img>
            <span class="down-arrow"></span>
          </div>

          {/* 프로필 토글 박스 */}
          <div class="profile-open" style="display: none">
            <p class="user-name">홍길동 고객님</p>
            <ul class="user-control">
              <li>받은 견적</li>
              <li>마이페이지</li>
            </ul>
            <p class="secondary-btn"><img src="./images/secondary.svg"></img>고수로 전환</p>
            <button class="logout-btn">로그아웃</button>
          </div>
          {/* 프로필 토글 박스 */}
        </div>
      </div>
    </nav>
  )
}

export default UsertHeader;