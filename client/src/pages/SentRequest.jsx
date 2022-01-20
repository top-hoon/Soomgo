import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/common.css';
import '../assets/css/sentRequest.css';

import StatusBtn from '../assets/images/status-badge-btn.svg';
import EmptyIcon from '../assets/images/empty-icon.svg';
import Profile1 from '../assets/images/avatar-profile-1.jpg';
import Profile2 from '../assets/images/avatar-profile-2.jpeg';
import PrevBtn from '../assets/images/slick-arrow-left.svg';

function SentRequest() {

  return (
    <section className="sent-request">
      <div className="banner container">
        <div className="inner-banner"></div>
      </div>
      <div className="container">
        <h1 className="page-heading-h1">받은 견적</h1>
        <ul className="quote-list">
          <li className="quote-list-item">
            <div className="request-card">
              <div className="request-card-header">
                <span className="status-badge">
                  <img src={StatusBtn} alt="상태" />취소
                </span>
                <span className="time">2021.11.23</span>
              </div>
              <div className="request-card-body">
                <h4 className="request-card-title">영어 과외</h4>
                <div className="quote-avatars">
                  <div className="waiting">
                    <img src={EmptyIcon} />
                    받은 견적이 없습니다.
                  </div>
                </div>
                <Link className="button" to="/Quotes">자세히 보기</Link>
              </div>
            </div>
          </li>
          <li className="quote-list-item">
            <div className="request-card">
              <div className="request-card-header">
                <span className="status-badge">
                  <img src={StatusBtn} alt="상태" />취소
                </span>
                <span className="time">2021.11.19</span>
              </div>
              <div className="request-card-body">
                <h4 className="request-card-title">보컬 레슨</h4>
                <div className="quote-avatars">
                  <div>
                    <div className="avatar-profile">
                      <img src={Profile1} />
                    </div>
                  </div>
                  <div>
                    <div className="avatar-profile">
                      <img src={Profile2} />
                    </div>
                  </div>
                </div>
                <Link className="button" to="/Quotes">자세히 보기</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="recommended-services container">
        <h2 className="heading">추천 서비스</h2>
        <div className="recommend-services">
          <button className="slick-prev"><img src={PrevBtn} /></button>
          <div className="slick-list">
            <div className="slick-track">
              <div className="slick-slide">
                <div>
                  <div className="slick-item">
                    <div className="thumb thumb1"></div>
                    <div className="info">
                      <div className="title">비즈니스 영어</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div>
                  <div className="slick-item">
                    <div className="thumb thumb2"></div>
                    <div className="info">
                      <div className="title">수학 과외</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div>
                  <div className="slick-item">
                    <div className="thumb thumb3"></div>
                    <div className="info">
                      <div className="title">TOEIC/speaking/writing 과외</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div>
                  <div className="slick-item">
                    <div className="thumb thumb4"></div>
                    <div className="info">
                      <div className="title">화상영어/전화영어 회화</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SentRequest;