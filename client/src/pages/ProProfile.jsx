import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/common.css';
import '../assets/css/proProfile.css';

// css 작업 안된 파일임 
function ProProfile() {
  return(
    <div class="pro-profile">
      <div class="row no-gutters">
        <div class="profile-section col-lg-auto">
          <div class="my-profile-body">
            <div class="my-profile-overview">
              <div class="thumb-container">
                <div class="thumb">
                  <div class="user-profile-picture no-padding">
                    <div class="is-square"><img src="" alt="default-image" /></div>
                  </div>
                  <span class="click-icon"></span>
                </div>
              </div>
              <div class="info">
                <ul class="overview">
                  <li class="item">
                    <div class="point">5</div>
                    <div class="label">리뷰 평점</div>
                  </li>
                  <li class="divider"></li>
                  <li class="item">
                    <div class="point">2</div>
                    <div class="label">리뷰수</div>
                  </li>
                  <li class="divider"></li>
                  <li class="item">
                    <div class="point">1</div>
                    <div class="label">고용수</div>
                  </li>
                </ul>
                <Link to="/profile/insight" class="btn dashboard-btn insight-btn btn-primary" target="_self"><img src="" />활동분석</Link>
                <Link to="/profile/users/6410038" class="btn dashboard-btn btn-outline-primary" target="_self">미리보기</Link>
              </div>
            </div>
            <div class="my-profile-comp my-profile-name">
              <div class="comp-header update">
                <div class="heading">
                  <h2>이름</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">정상훈</div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-main-service">
              <div class="comp-header update">
                <div class="heading">
                  <h2>대표서비스</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">JLPT 과외</div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-introduce">
              <div class="comp-header update">
                <div class="heading">
                  <h2>한줄소개</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">
                  <div class="collapsed-text-line">
                    <div class="wrapper">
                      <p data-v-62bd56ac="">정상훈 고수의 일본어(일어) 과외 서비스</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-auth empty-view">
              <div class="comp-header auth">
                <div class="heading">
                  <h2>본인 인증</h2>
                  <span class="percentage-badge">10%</span>
                  <div class="action-group">
                    <div class="auth">인증받기</div>
                  </div>
                </div>
              </div>
              <div class="info"></div>
            </div>
            <div class="my-profile-comp my-profile-location">
              <div class="comp-header update">
                <div class="heading">
                  <h2>활동 지역</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">서울 광진구 자양동 659-9 (자양동)</div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-active-time">
              <div class="comp-header update">
                <div class="heading">
                  <h2>연락 가능 시간</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">오전 9시 - 오후 6시</div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-payment">
              <div class="comp-header update">
                <div class="heading">
                  <h2>결제 수단</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">숨고페이, 카드결제, 계좌이체, 현금결제</div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-settlement-info empty-view">
              <div class="comp-header new">
                <div class="heading">
                  <h2>숨고페이 정산정보</h2>
                  <span class="percentage-badge">10%</span>
                  <div class="action-group">
                    <div class="new">등록하기</div>
                  </div>
                </div>
              </div>
              <div class="info"></div>
            </div>
            <div class="my-profile-comp my-profile-career">
              <div class="comp-header update">
                <div class="heading">
                  <h2>경력</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">1년 이상</div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-staffs">
              <div class="comp-header update">
                <div class="heading">
                  <h2>직원수</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value"> 직원 1명 (본인포함) </div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-business-cert empty-view">
              <div class="comp-header new">
                <div class="heading">
                  <h2>사업자등록증 등록</h2>
                  <div class="action-group">
                    <div class="new">등록하기</div>
                  </div>
                </div>
                <p class="subtitle">허위정보에 대한 모든 책임은 본인에게 있습니다</p>
              </div>
              <div class="info">
                <div class="list-container">
                  <div class="image-list-viewer view-list">
                    <ul class="row"></ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-license">
              <div class="comp-header update">
                <div class="heading">
                  <h2>자격증 및 기타 서류 등록</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
                <p class="subtitle">허위정보에 대한 모든 책임은 본인에게 있습니다</p>
              </div>
              <div class="info">
                <div class="list-container">
                  <div class="image-list-viewer view-list">
                    <ul class="row">
                      <li data-v-3ea60fb2="" class="col-sm-2 col-md-2 col-lg-2 col-3">
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-tax-invoice">
              <div class="comp-header update">
                <div class="heading">
                  <h2>세금계산서 발행</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div>네, 가능합니다</div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-service-list">
              <div class="comp-header update">
                <div class="heading">
                  <h2>제공 서비스</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="list-container">
                  <div class="view">
                    <ul>
                      <li class="add">서비스 추가</li>
                      <li> 일본어(일어) 과외 </li>
                      <li> JLPT 과외 </li>
                    </ul>
                    <div class="more">
                      <span data-v-20d4cd73="">접기</span>
                    </div>
                  </div>
                </div>
                <div class="recommend-service-container">
                  <h3>추가로 제공 가능한 서비스를 알려주세요.</h3>
                  <p>더 많은 고객을 만날 기회가 생깁니다.</p>
                  <ul>
                    <li> 비즈니스 일본어 </li>
                    <li> JPT 과외 </li>
                    <li> 일본어 (일어) 번역 </li>
                    <li> 영어 과외 </li>
                    <li> 일본어 (일어) 통역 </li>
                    <li> EJU 과외 </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-service-desc">
              <div class="comp-header update">
                <div class="heading">
                  <h2>고수 서비스 상세설명</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="value">
                  <div class="collapsed-text-line">
                    <div class="wrapper">
                      <p>들어오세요</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-profile-media container">
              <div class="header">
                <h2>사진 및 동영상</h2>
                <span class="modify-badge">수정</span>
              </div>
              <div class="media-tip">
                <img src="" class="tip-icon" />
                <p class="desc">평균<strong>8개의 사진/동영상</strong>을 고수들이 등록했어요.</p>
              </div>
              <div class="media-body">
                <ul>
                  <li></li>
                  <li class="thumb">
                    <div class="video"></div>
                    <img src=""/>
                  </li>
                  <li class="thumb">
                    <div></div>
                    <img src=""/>
                  </li>
                  <li class="thumb">
                    <div></div>
                    <img src=""/>
                  </li>
                  <li class="thumb">
                    <div></div>
                    <img src=""/>
                  </li>
                  <li hidden="hidden" class="thumb">
                    <div></div>
                    <img src=""/>
                  </li>
                  <li class="thumb">
                    <div></div>
                    <span class="more"> 더 보기 </span>
                  </li>
                  <li hidden="hidden" class="thumb">
                    <div class="video"></div>
                    <img src=""/>
                  </li>
                </ul>
                <div lass="guide">
                  <p class="title">고수님을 보여주세요</p>
                  <p class="desc"> 고수님이 직접 일하는 사진과 동영상이 고객들에게 큰 도움이 됩니다 (전/후 결과, 작업과정, 장비 등)</p>
                  <button type="button" class="btn upload-btn btn-primary btn-block"> 사진/동영상 등록하기</button>
                </div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-qna">
              <div class="comp-header update">
                <div class="heading">
                  <h2>질문답변</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <ul>
                  <li>
                    <div class="question">Q. 어떤 서비스를 전문적으로 제공하나요?</div>
                    <div class="answer">
                      <div class="collapsed-text-line">
                        <div class="wrapper">
                          <p>서비스가 시작되기 전 어떤 절차로 진행하나요?서비스가 시작되기 전 어떤 절차로 진행하나요?서비스가 시작되기 전 어떤 절차로 진행하나요?</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="question">Q. 서비스의 견적은 어떤 방식으로 산정 되나요?</div>
                    <div class="answer">
                      <div class="collapsed-text-line">
                        <div class="wrapper">
                          <p >서비스가 시작되기 전 어떤 절차로 진행하나요?서비스가 시작되기 전 어떤 절차로 진행하나요?서비스가 시작되기 전 어떤 절차로 진행하나요?</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="my-profile-comp my-profile-external-link">
              <div class="comp-header update">
                <div class="heading">
                  <h2>링크</h2>
                  <div class="action-group">
                    <div class="update">수정</div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="list-container">
                  <ul class="row view">
                    <li class="col-auto">
                      <div class="homepage"></div>
                    </li>
                    <li class="col-auto">
                      <div class="facebook"></div>
                    </li>
                    <li class="col-auto">
                      <div class="twitter"></div>
                    </li>
                    <li class="col-auto">
                      <div class="instagram"></div>
                    </li>
                    <li class="col-auto">
                      <div class="blog"></div>
                    </li>
                    <li class="col-auto">
                      <div class="kakaostory"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="my-profile-comp my-profile-review">
              <div class="comp-header">
                <div class="heading">
                  <h2>리뷰</h2>
                  <span class="percentage-badge">10%</span>
                  <div class="action-group"></div>
                </div>
              </div>
              <div class="info">
                <div class="profile-review-list">
                  <div>
                    <div class="summary">
                      <div class="avg">5.0</div>
                      <div class="info">
                        <ul class="star-rate readonly isBig">
                          <li><img src="" alt="Star Icon" /></li>
                          <li><img src="" alt="Star Icon" /></li>
                          <li><img src="" alt="Star Icon" /></li>
                          <li><img src="" alt="Star Icon" /></li>
                          <li><img src="" alt="Star Icon" /></li>
                        </ul>
                        <div class="review-count">2개 리뷰</div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <ul class="review-container">
                      <li>
                        <div class="profile-review-item">
                          <div class="meta">
                            <span class="author">김**</span>
                            <ul class="star-rate readonly">
                              <li><img src="" alt="Star Icon" /></li>
                              <li><img src="" alt="Star Icon" /></li>
                              <li><img src="" alt="Star Icon" /></li>
                              <li><img src="" alt="Star Icon" /></li>
                              <li><img src="" alt="Star Icon" /></li>
                            </ul>
                            <span class="date">2021.12.02</span>
                          </div>
                          <div class="collapsed-text-line content">
                            <div class="wrapper">
                              <p>완전 잘가르쳐줘요..........</p>
                            </div>
                            <div class="collapse-button">
                              <div class="review-action">
                                <span class="add-comment">답글달기</span>
                              </div>
                            </div>
                          </div>
                          <div class="comment-input">
                            <textarea name="reply" placeholder="댓글을 입력해주세요." rows="3" wrap="soft" class="form-control is-valid"></textarea>
                            <div class="invalid-feedback"></div>
                            <div class="comment-action">
                              <button type="button" class="btn cancel btn-light btn-sm">취소</button>
                              <button type="button" class="btn save btn-primary btn-sm">저장</button>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </li>
                      <li>
                        <div class="profile-review-item">
                          <div class="meta">
                            <span class="author">이**</span>
                            <ul class="star-rate readonly">
                              <li>
                                <img src="" alt="Star Icon" />
                              </li>
                              <li>
                                <img src="" alt="Star Icon" />
                              </li>
                              <li>
                                <img src="" alt="Star Icon" />
                              </li>
                              <li>
                                <img src="" alt="Star Icon" />
                              </li>
                              <li>
                                <img src="" alt="Star Icon" />
                              </li>
                            </ul>
                            <span class="date">2021.11.19</span>
                          </div>
                          <div class="collapsed-text-line content">
                            <div class="wrapper">
                              <p >국둑둑두굳굳굳임요!!</p>
                            </div>
                            <div class="collapse-button">
                              <div class="review-action">
                                <span class="add-comment">답글달기</span>
                              </div>
                            </div>
                          </div>
                          <div class="comment-input">
                            <textarea name="reply" placeholder="댓글을 입력해주세요." rows="3" wrap="soft" class="form-control is-valid" data-vv-validate-on="blur|input" aria-invalid="false" spellcheck="false" data-ms-editor="true" id="__BVID__609"></textarea>
                            <div class="invalid-feedback"></div>
                            <div class="comment-action">
                              <button type="button" class="btn cancel btn-light btn-sm">취소</button>
                              <button type="button" class="btn save btn-primary btn-sm">저장</button>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="toast-container vot-bottom-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProProfile;