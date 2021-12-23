import React from 'react';
import '../components/css/common';
import '../components/css/proHeader';

function ProHeader() {
  return (
    <nav class="pro-header">
      <div class="left-section">
        <div class="logo"></div>
        <div class="service-searcher">
          <div class="input-prepend"></div>
          <input class="input-search" type="text" placeholder="어떤 서비스가 필요하세요?"></input>
        </div>
      </div>
      <div class="right-section">
        <div class="pro-navi">
          <span class="pro-navi-item">받은요청</span>
          <span class="pro-navi-item">바로견적</span>
          <span class="pro-navi-item">채팅</span>
          <span class="pro-navi-item">프로필</span>
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

          <div class="pro-profile">
            <img class="pro-image" src="./images/05463c1e-4ba6-4250-b039-6781cf891093.jpg"></img>
            <span class="down-arrow"></span>
          </div>

          {/* 프로필 토글 박스 */}
          <div class="profile-open" style="display: none">
            <p class="pro-name">홍길동 고수님</p>
            <p class="pro-review">
              <img class="star" src="./images/star.svg">평점 5.0</img>
              <span class="bulkhead"></span>리뷰 2
            </p>
            <ul class="pro-control">
              <li>프로필 관리</li>
              <li>마이페이지</li>
            </ul>
            <p class="secondary-btn"><img src="./images/secondary.svg"></img>고객으로 전환</p>
            <button class="logout-btn">로그아웃</button>
          </div>
          {/* 프로필 토글 박스 */}
        </div>
      </div>
    </nav>
  )
}

export default ProHeader;