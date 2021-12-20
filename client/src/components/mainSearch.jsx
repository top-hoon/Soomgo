import React, { Component } from 'react';

class MainSearch extends Component {
  render () {
    return(
      <>
        <section class="main-search">
          <div class="service">
            <ul class="service-tap">
              <li><span>서비스 찾기</span></li>
              <li><span>고객 찾기</span></li>
            </ul>
            <h1 class="service-txt">
              어떤 서비스가
              <br>필요하세요?</br>
            </h1>
            <div class="service-search">
              <form action="" method="post">
                <div>
                  <input class="" type="text" placeholder="서비스를 검색하세요"></input>
                  <button class="button">
                    <img src=""></img>
                  </button>
                </div>
              </form>
            </div>
            <ul class="service-list">
              <li><img src=""></img><p>레슨</p></li>
              <li><img src=""></img><p>홈/리빙</p></li>
              <li><img src=""></img><p>이벤트</p></li>
              <li><img src=""></img><p>비즈니스</p></li>
              <li><img src=""></img><p>디자인/개발</p></li>
              <li><img src=""></img><p>건강/미용</p></li>
              <li><img src=""></img><p>알바</p></li>
              <li><img src=""></img><p>기타</p></li>
            </ul>
          </div>
          <div class="main-image">
            <img src=""></img>
          </div>
        </section>
      </>
    )
  }
}

export default MainSearch;