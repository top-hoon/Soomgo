import React, { Component } from 'react';

function MainService() {
  return(
    <section class="main-service">
      <ul class="service-list">
        <li class="service-item">
          <img class="service-icon" src="./images/lesson.svg"></img>
          <p class="service-name">레슨</p>
        </li>
        <li>        
          <img class="service-icon" src="./images/home-living.svg"></img>
          <p class="service-name">홈/리빙</p>
        </li>
        <li>
          <img class="service-icon" src="./images/event.svg"></img>
          <p class="service-name">이벤트</p>
        </li>
        <li>
          <img class="service-icon" src="./images/business.svg"></img>
          <p class="service-name">비즈니스</p>
        </li>
        <li>
          <img class="service-icon" src="./images/design-development.svg"></img>
          <p class="service-name">디자인/개발</p>
        </li>
        <li>
          <img class="service-icon" src="./images/health-beauty.svg"></img>
          <p class="service-name">건강/미용</p>
        </li>
        <li>
          <img class="service-icon" src="./images/part-time-job.svg"></img>
          <p class="service-name">알바</p>
        </li>
        <li>
          <img class="service-icon" src="./images/etc.svg"></img>
          <p class="service-name">기타</p>
        </li>
      </ul>
    </section>
  )
}

export default MainService;