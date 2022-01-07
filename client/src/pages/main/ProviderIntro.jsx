import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/main.css';

import ReceiveRequest from '../../assets/images/receive-request.png';

function ProviderIntro() {
  return (
    <section className="provider-introduce">
      <div className="title">
        <h3>
          <strong>더 많은 고객을 만날 기회!</strong>
          <br />가입 직후 <strong>내 조건에 맞는 요청서</strong>를
          <br />무료로 받아보고 만나고 싶은
          <br />고객과 연락해보세요.
        </h3>
        <a className="button" href="/proSignup">고수로 가입하기</a>
      </div>
      <div className="slick">
        <div className="slick-arrows">
          <button className="prev"><img src="" /></button>
          <button className="next"><img src="" /></button>
        </div>
        <ul className="slick-list">
          <li>
            <img src={ReceiveRequest} />
            <h4>고객의 요청서가 도착해요</h4>
            <p>
              전문 활동 분야를 등록하면
              <br />고객이 도움이 필요한 서비스에 대해
              <br />작성한 요청서가 도착해요.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProviderIntro;