import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/common.css';
import '../assets/css/quoteList.css';

import FullStar from '../assets/images/icon-common-review-star-small-full.svg';
import Price from '../assets/images/icon-service-price.svg';
import Pay from '../assets/images/pay.svg';


function QuoteList() {

  function request() {
    document.querySelector('.modal').style.display = "block";
    document.querySelector('.modal-backdrop').style.display = "block";
  }

  function close() {
    document.querySelector('.modal').style.display = "none";
    document.querySelector('.modal-backdrop').style.display = "none";
  }

  return (
    <section className="received-quote-list">
      <div className="requested-service-header">
        <div className="container">
          <div className="header-title">
            <div className="title">영어 과외</div>
            <div className="date">2021.11.23</div>
          </div>
          <div className="header-buttons">
            <button className="btn btn-primary" onClick={request}>내 요청서 보기</button>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="container">
          <ul className="quote-pro-item-list">
            <li className="quote-pro-item">
              <Link className="chat-link" to="/chat"> 
                <div className="align-items-start">
                  <div className="profile">
                    <div className="user-profile-picture">
                      <div className="is-square is-square-1"></div>
                    </div>
                  </div>
                  <div className="service-info">
                    <div className="name-wrapper">
                      <h5 className="profile-name">김찬양</h5>
                      <span className="hire-pro-badge">고용중</span>
                    </div>
                    <div className="profile-badges">
                      <div className="review-rate">
                        <img src={FullStar} />
                        <span className="rate">5.0</span>
                        <span className="count">(65)</span>
                        <span className="badge-item">91회 고용</span>
                      </div>
                    </div>
                    <div className="bottom-area">
                      <div className="price">
                        <img src={Price} />
                        <div className="price-text">
                          <label>시간 당</label>
                          <span> 50,000원 부터~</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>            
            <li className="quote-pro-item">
              <div className="align-items-start">
                <div className="profile">
                  <div className="user-profile-picture">
                    <div className="is-square is-square-2"></div>
                  </div>
                </div>
                <div className="service-info">
                  <div className="name-wrapper">
                    <h5 className="profile-name">서영빈</h5>
                  </div>
                  <div className="profile-badges">
                    <div className="review-rate">
                      <span className="badge-item">2회 고용</span>
                      <span className="badge-item soomgo-pay">
                        <img src={Pay} /></span>
                    </div>
                  </div>
                  <div className="bottom-area">
                    <div className="price">
                      <img src={Price} />
                      <div className="price-text">
                        <label>총</label>
                        <span> 200,000원 부터~</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">내 요청서</h5>
              <button className="close" onClick={close}>×</button>
            </div>
            <div className="modal-body">
              <div>
                <ul className="request">
                  <li className="request-item">
                    <p className="question">레슨 받는 목적이 무엇인가요?</p>
                    <p className="answer">취미</p>
                  </li>
                  <li className="request-item">
                    <p className="question">레슨 받는 목적이 무엇인가요?</p>
                    <p className="answer">취미</p>
                  </li>
                  <li className="request-item">
                    <p className="question">어떤 레슨 형태를 원하시나요?</p>
                    <p className="answer">무관</p>
                  </li>
                  <li className="request-item">
                    <p className="question">어떻게 진행하기 원하시나요?</p>
                    <p className="answer">어떤 방식이든 상관없어요.</p>
                  </li>
                  <li className="request-item">
                    <p className="question">레슨생의 연령대는 어떻게 되나요?</p>
                    <p className="answer">20대</p>
                  </li>
                  <li className="request-item">
                    <p className="question">레슨생의 성별은 무엇인가요?</p>
                    <p className="answer">남자</p>
                  </li>
                  <li className="request-item">
                    <p className="question">선호하는 고수의 성별이 있나요?</p>
                    <p className="answer">남</p>
                  </li>
                  <li className="request-item">
                    <p className="question">레슨받기 좋은 요일은 언제인가요?</p>
                    <p className="answer">목요일 금요일 토요일 일요일</p>
                  </li>
                  <li className="request-item">
                    <p className="question">희망하는 레슨 시간대는 언제인가요?</p>
                    <p className="answer">오전 (9~12시) 오후 (12~3시)</p>
                  </li>
                  <li className="request-item">
                    <p className="question">레슨 희망일을 선택해주세요.</p>
                    <p className="answer">일주일 이내로 진행하고 싶어요.</p>
                  </li>
                  <li className="request-item">
                    <p className="question">레슨 희망 지역을 선택해주세요.</p>
                    <p className="answer">서울 강남구 논현1동</p>
                  </li>
                  <li className="request-item">
                    <p className="question">레슨 관련 문의사항을 알려주세요!</p>
                    <p className="answer">핫핫</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop"></div>
    </section>
  )
}

export default QuoteList;