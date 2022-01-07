import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/common.css';
import '../assets/css/chatDetail.css';


import FullStar from '../assets/images/icon-common-review-star-small-full.svg';
import HalfStar from '../assets/images/icon-common-review-star-small-half.svg';
import EmptyStar from '../assets/images/icon-common-review-star-small-empty.svg';
import Pay from '../assets/images/pay.svg';


function ChatDetail() {

  function active(e) {
    if (e.target.getAttribute('data') == 'review') {
      e.target.classList.add('active');
      e.target.scrollIntoView(true); 
    }
  }

  return (
    <div className="chat-room">
      <div className="no-gutters">
        <div className="chatbody-section">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div className="aside-sheet-section">
          <div className="chat-aside-container">
            <div className="provider-profile">
              <div className="tabs-container">
                <div className="card-header"></div>
                <div className="tab-content">
                  <div className="tab-pane">
                    <div className="profile-wrapper">

                      {/* 고수 프로필 */}
                      <div className="profile-body">
                        <div className="profile-overview">
                          <div className="thumb">
                            <div className="user-profile-picture">
                              <div className="is-square"></div>
                            </div>
                          </div>
                          <div className="info">
                            <h1 className="provider-nickname">문환</h1>
                            <div className="category">보컬 레슨</div>
                            <div className="profile-badges">
                              <div className="review-rate">
                                <img src={FullStar} />
                                <span className="rate">3.7</span>
                                <span className="count">(3)</span>
                              </div>
                              <span className="soomgo-pay">
                                <img src={Pay} />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="background-block"></div>
                        <ul className="sticky-nav">
                          <li className="profile-menu active" data="info" onClick={active}>고수 정보</li>
                          <li className="profile-menu" data="photo" onClick={active}>사진/동영상</li>
                          <li className="profile-menu" data="review" onClick={active}>리뷰 3</li>
                          <li className="profile-menu" data="faq" onClick={active}>질문답변</li>
                        </ul>
                        <div className="about">
                          <div className="profile-introduce">
                            <h2>한줄소개</h2>
                            <p>[성수] 보컬레슨 취미,개인,그룹,축가</p>
                          </div>
                          <div className="profile-basic-info">
                            <h2>기본정보</h2>
                            <ul>
                              <li className="auth-personal">본인 인증</li>
                              <li className="hired">4회 고용됨</li>
                              <li className="address">서울 성동구</li>
                              <li className="active-time">연락 가능 시간 : 오전 10시 - 오후 11시</li>
                              <li className="payment">숨고페이,계좌이체,현금결제 가능</li>
                            </ul>
                          </div>
                          <div className="profile-added-info">
                            <h2>추가정보</h2>
                            <ul>
                              <li className="career">경력 1년</li>
                              <li className="business-size">직원수 1명</li>
                              <li className="auth-business">사업자등록증 등록완료</li>
                            </ul>
                          </div>
                          <div className="profile-service-list">
                            <h2 >제공 서비스</h2>
                            <div className="view">
                              <ul>
                                <li className="cursor-default">보컬 레슨</li>
                                <li className="cursor-default">축가 요청</li>
                              </ul>
                              <div className="more">
                                <span>더보기</span>
                              </div>
                            </div>
                          </div>
                          <div className="profile-service-desc">
                            <h2>서비스 상세설명</h2>
                            <div className="collapsed-text-line">
                              <div className="wrapper">
                                <p>
                                  #취미분들을 위한수업
                                  <br />#노래방 가는 것이 두려운 사람
                                  <br />#가성으로만 노래하는 사람
                                  <br />#목소리가 작은 사람
                                  <br />#악을 지르며 노래하는 사람
                                  <br />#본인이 음치, 박치라고 생각 되는 사람
                                  <br />#저렴한 수업료
                                  <br />#축가 문의
                                  <br />#2호선 성수역 1분거리
                                  <br />
                                  <br />주1회 혹은 주2회 원하시는 스타일로 수업 진행하며 지루하게 발성만 매번하는 수업 방식이 아닌 곡수업 위주 레슨 하고있습니다. 취미로 하시는분들을 위한 수업만 진행하고있구요. 발성 스타일이나 노래실력이 사람마다 다 다르기 때문에 각 보컬 타입과 난이도에 맞게 레슨 진행하고있습니다. 기초 발성, 발성 이론, 레코딩 수업 등 다양한 커리큘럼 준비되어있으니 문의해주시면 감사하겠습니다~
                                </p>
                              </div>
                              <div className="collapse-button">
                                <div className="view-more-button">
                                  <span className="more">더보기</span>
                                  <span className="more">접기</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-review">
                          <h2>리뷰</h2>
                          <div className="profile-review-list">
                            <div>
                              <div className="summary">
                                <div className="avg">3.7</div>
                                <div className="info">
                                  <ul className="star-rate">
                                    <li><img src={FullStar} /></li>
                                    <li><img src={FullStar} /></li>
                                    <li><img src={FullStar} /></li>
                                    <li><img src={HalfStar} /></li>
                                    <li><img src={EmptyStar} /></li>
                                  </ul>
                                  <div className="review-count">3개 리뷰</div>
                                </div>
                              </div>
                              <hr />
                            </div>
                            <div>
                              <ul className="review-container">
                                <li>
                                  <div className="profile-review-item">

                                    <div className="meta">
                                      <span className="author">민**</span>
                                      <ul className="star-rate">
                                        <li><img src={FullStar} /></li>
                                        <li><img src={FullStar} /></li>
                                        <li><img src={FullStar} /></li>
                                        <li><img src={FullStar} /></li>
                                        <li><img src={FullStar} /></li>
                                      </ul>
                                      <span className="date">2021.06.08</span>
                                    </div>
                                    <div className="collapsed-text-line">
                                      <div className="wrapper">
                                        <p>
                                          9회차 진행중입니다
                                          <br />처음 4회만 하고 스케줄때문에 그만하려했었는데 바뀌고있는 목소리가 너무 마음에들어 시간내서 추가로 계속 진행중이에요
                                        </p>
                                      </div>
                                    </div>
                                    
                                    <div className="profile-review-item comment">

                                      <div className="meta">
                                        <span className="author">문환</span>
                                        <span className="date">2021.06.08</span>
                                      </div>

                                      <div className="collapsed-text-line">
                                        <div className="wrapper">
                                          <p>더 좋아지실수 있게 티칭 열심히 하겠습니다! 감사합니다~!^^</p>
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="profile-qna">
                          <h2>질문답변</h2>
                          <ul>
                            <li>
                              <div className="question">
                                Q. 어떤 서비스를 전문적으로 제공하나요?
                              </div>
                              <div className="answer">
                                <div className="collapsed-text-line">
                                  <div className="wrapper">
                                    <p>보컬 레슨,축가</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="question">
                                Q. 서비스의 견적은 어떤 방식으로 산정 되나요?
                              </div>
                              <div className="answer">
                                <div className="collapsed-text-line">
                                  <div className="wrapper">
                                    <p>주1회는 4회 결제 주2회는 8회 결제</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="question">
                                Q. 완료한 서비스 중 대표적인 서비스는 무엇인가요? 소요 시간은 얼마나 소요 되었나요?
                              </div>
                              <div className="answer">
                                <div className="collapsed-text-line">
                                  <div className="wrapper">
                                    <p>50분</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="question">
                                Q. A/S 또는 환불 규정은 어떻게 되나요?
                              </div>
                              <div className="answer">
                                <div className="collapsed-text-line">
                                  <div className="wrapper">
                                    <p>
                                      4회 결제후 레슨 하루 전 까지 취소(전액환불)
                                      <br />1회 수강후 (50%환불)
                                      <br />2회 부터 환불 불가
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* 고수 프로필 */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatDetail;