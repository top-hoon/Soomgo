import React from 'react';
import '../assets/css/common.css';
import '../assets/css/sendRequest.css';

import FullStar from '../assets/images/icon-common-review-star-small-full.svg';
import HalfStar from '../assets/images/icon-common-review-star-small-half.svg';
import ReviewIcon from '../assets/images/review-icon.svg';
import Step1 from '../assets/images/img-request-howto-step-1@3x.png';
import Step2 from '../assets/images/img-request-howto-step-2@3x.png';
import Step3 from '../assets/images/img-request-howto-step-3@3x.png';
import Arrow1 from '../assets/images/arrow-1.png';
import Arrow2 from '../assets/images/arrow-2.png';

function SendRequest() {
  return (
    <section className="send-request">
      <div className="jumbotron">
        <div className="title-wrapper">
          <h1>영어 과외</h1>
          <div className="service-review-rate">
            <ul className="star-rate">
              <li><img src={FullStar} /></li>
              <li><img src={FullStar} /></li>
              <li><img src={FullStar} /></li>
              <li><img src={FullStar} /></li>
              <li><img src={HalfStar} /></li>
            </ul>
            <span>4.6</span>
          </div>
          <div className="service-data">
            <div className="data">
              <h5>104,940</h5>
              <p>활동 고수</p>
            </div>
            <div className="data">
              <h5>367,796</h5>
              <p>누적 요청서</p>
            </div>
            <div className="data">
              <h5>7,222</h5>
              <p>리뷰 수</p>
            </div>
          </div>
        </div>
        <div className="dimmend"></div>
      </div>
      <div className="form-contents">
        <div className="request-form-wrap">
          <form className="request-form" action="">
            <div className="request-form-progress-bar">
              <div className="progress-guide-text">완료 시 평균 4개 견적 도착</div>
              <div className="progress-wrapper">
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
                <div className="progress-percent">0%</div>
              </div>
            </div>
            <div className="request-item-wrapper">
              <div>
                <div className="qeustion-section">
                  <div className="question">과외를 받는 목적이 무엇인가요?</div>
                  <div className="question-desc"></div>
                </div>
                <ul className="answer-section">
                  <li className="answer">
                    <div className="answer-area">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        <span className="checkbox"></span>
                        <div className="text-area">
                          <div className="text">초/중/고 영어</div>
                          <div className="text-desc">내신·입시·수능</div>
                        </div>
                      </label>
                    </div>
                  </li>
                  <li className="answer">
                    <div className="answer-area">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        <span className="checkbox"></span>
                        <div className="text-area">
                          <div className="text">자기 개발</div>
                          {/* <div className="text-desc"></div> */}
                        </div>
                      </label>
                    </div>
                  </li>
                  <li className="answer">
                    <div className="answer-area">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        <span className="checkbox"></span>
                        <div className="text-area">
                          <div className="text">시험/면접 준비</div>
                          {/* <div className="text-desc"></div> */}
                        </div>
                      </label>
                    </div>
                  </li>
                  <li className="answer">
                    <div className="answer-area">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        <span className="checkbox"></span>
                        <div className="text-area">
                          <div className="text">실무 능력 향상</div>
                          {/* <div className="text-desc"></div> */}
                        </div>
                      </label>
                    </div>
                  </li>
                  <li className="answer">
                    <div className="answer-area">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        <span className="checkbox"></span>
                        <div className="text-area">
                          <div className="text">유학/이민/주재원 준비</div>
                          {/* <div className="text-desc"></div> */}
                        </div>
                      </label>
                    </div>
                  </li>
                  <li className="answer">
                    <div className="answer-area">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        <span className="checkbox"></span>
                        <div className="text-area">
                          <div className="text">여행/관광 준비</div>
                          {/* <div className="text-desc"></div> */}
                        </div>
                      </label>
                    </div>
                  </li>
                  <li className="answer">
                    <div className="answer-area">
                      <input className="checkbox" type="checkbox" />
                      <label>
                        <span className="checkbox"></span>
                        <div className="text-area">
                          <div className="text">기타</div>
                          {/* <div className="text-desc"></div> */}
                        </div>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="step-wrapper">
              <div className="validation-wrapper">
                <span className="validation"></span>
              </div>
              <div className="button-wrapper">
                <button className="step-btn">다음</button>
              </div>
            </div>
          </form>
        </div>
        <div className="usage-tip">
          <h4>숨고는 어떤 곳인가요?</h4>
          <p className="p2">
            서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고 빠르게 연결해드리는 전문가 매칭 서비스입니다.
            <br />1분 내외의 요청서를 작성하면, 여러 고수님들이 맞춤형 견적을 보내드려요.
            <br /> 맘에 쏙 드는 고수의 맞춤형 서비스를 받아보세요.
          </p>
          <h4>영어 과외 고수만을 모았다!</h4>
          <p className="p2">
            기초 영어부터 내신, 수능, 성인 영어까지 나에게 100% 맞춘 영어 과외를 만나보세요.
            <br />선생님 프로필, 커리큘럼, 비용 비교하고 결정할 수 있어요.
            <br />지금 바로 숨고를 통해 영어 공부를 시작하세요!
          </p>
        </div>
      </div>
      <div className="intro-pro">
        <div className="intro-container">
          <div className="intro-title">미리 보는 인기 고수</div>
          <div className="intro-subtitle">104,940명의 고수가 기다리고 있어요</div>
          <div className="pro-list-wrapper">
            <ul className="pro-list">
              <li className="pro-item">
                <div className="profile-image">
                  <div className="is-square is-square-1"></div>
                </div>
                <div className="pro-info">
                  <div className="pro-name">양수정</div>
                  <div className="pro-introduction">양수정 고수의 영어 과외 서비스</div>
                  <div className="pro-rate">
                    <ul className="star-rate">
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                    </ul>
                    <span className="review-rate">5</span>
                    <span className="review-count">(53개)</span>
                  </div>
                  <div className="pro-review">
                    <img src={ReviewIcon} />
                    <div className="pro-comment">
                      <span>"</span>
                      <div className="comment"> 선생님께 영어를 배우기 시작한지 이제 3달째에 접어 들었네요! 직장인이라 늦은 시간에 하는데 시간도 잘 맞춰 주시고, 알지 못했던 영어 표현들을 배울 수 있어서 너무 좋아요! 매일 카톡으로 숙제도 내주셔서 복습하기에도 좋습니다. 선생님 성격도 시원시원 하셔서 수업시간이 즐거워요~~ 추천합니다 </div>
                      <span>"</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pro-item">
                <div className="profile-image">
                  <div className="is-square is-square-2"></div>
                </div>
                <div className="pro-info">
                  <div className="pro-name">명빈</div>
                  <div className="pro-introduction">취업 및 교육 전문 컨설팅. 공기업, 외국계기업, 대기업, 중소기업 등 다양한 분야 경력 유 토익, 토익스피킹, 오픽 주식 컴활 및 과목과외</div>
                  <div className="pro-rate">
                    <ul className="star-rate">
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                    </ul>
                    <span className="review-rate">4.9</span>
                    <span className="review-count">(120개)</span>
                  </div>
                  <div className="pro-review">
                    <img src={ReviewIcon} />
                    <div className="pro-comment">
                      <span>"</span>
                      <div className="comment"> 공기업 면접에 관한 사전준비를 꼼꼼하고 상세하게 해주셔서 감사합니다 예상질문이 날카로웠는데 큰 도움이 되었습니다</div>
                      <span>"</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pro-item">
                <div className="profile-image">
                  <div className="is-square is-square-3"></div>
                </div>
                <div className="pro-info">
                  <div className="pro-name">Lythia</div>
                  <div className="pro-introduction">작은 영웅 만들기 프로젝트 🏄‍♀️😉😻Focus on Present and Future not Past!</div>
                  <div className="pro-rate">
                    <ul className="star-rate">
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                    </ul>
                    <span className="review-rate">4.9</span>
                    <span className="review-count">(53개)</span>
                  </div>
                  <div className="pro-review">
                    <img src={ReviewIcon} />
                    <div className="pro-comment">
                      <span>"</span>
                      <div className="comment"> Teacher Lythia is always passionate and prepares for classes very thoroughly. She is the most thorough teacher I have ever seen, and she has passion for language, not just as an English teacher.  I recommend that someone who has a purpose of "how you want to shape your future through English" meet Lythia teacher. But it doesn't work only for those who want English grammar or speaking. Whether you take this English class for a month or a year, you will gain a confidence. It's a great way to get a lot from Lythia and develop it in your own power. 🍎English grammar, sentence structure, English essay, thinking in English, and reading in English. 🍓I became more familiar with English and knew that language should be achieved step by step. I also realized that the future is always open. ⭐️I always roughly studied English, but I tried to look through it carefully and thought about how it would affect my overall future.</div>
                      <span>"</span>
                    </div>
                  </div>
                </div>
              </li>             
              <li className="pro-item">
                <div className="profile-image">
                  <div className="is-square is-square-4"></div>
                </div>
                <div className="pro-info">
                  <div className="pro-name">고병수</div>
                  <div className="pro-introduction">☆수능영어 1등급으로 가는 방법을 정확히 알면, 영어가 전혀 어렵지 않습니다. 믿고 따라오세요.☆중학생, 고등학생, 성인 상관 없이 가능합니다.</div>
                  <div className="pro-rate">
                    <ul className="star-rate">
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                    </ul>
                    <span className="review-rate">5</span>
                    <span className="review-count">(101개)</span>
                  </div>
                  <div className="pro-review">
                    <img src={ReviewIcon} />
                    <div className="pro-comment">
                      <span>"</span>
                      <div className="comment"> 가끔 제가 숙제를 안해와서 선생님과 함께 운동을 할 수 있으며 그로 인해 제 몸이 성장하고 있네요...ㅋㅋㅋㅋㅋㅋ영어실력도 늘고 몸도 좋아지고..일석이조네요..ㅎㅎㅎㅎㅎㅎ앞으로는 숙제 열심히 해오겠습니..다ㅎㅎㅎ</div>
                      <span>"</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pro-item">
                <div className="profile-image">
                  <div className="is-square is-square-5"></div>
                </div>
                <div className="pro-info">
                  <div className="pro-name">Q Academic English</div>
                  <div className="pro-introduction">안녕하세요, 영어교육 "큐 아카데믹 잉글리시" 대표 헨리입니다.</div>
                  <div className="pro-rate">
                    <ul className="star-rate">
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                      <li><img src={FullStar} /></li>
                    </ul>
                    <span className="review-rate">5</span>
                    <span className="review-count">(51개)</span>
                  </div>
                  <div className="pro-review">
                    <img src={ReviewIcon} />
                    <div className="pro-comment">
                      <span>"</span>
                      <div className="comment"> 영어 어려워하고 두려워했었는데 선생님이랑 하면서!! 아직은 잘 못하긴 하지만 그래도 점점 영어로 표현하는게 궁금해지고 막 던져보기 시작한거 같아요! (੭•̀ᴗ•̀)੭ 제 상황에 필요한 내용 위주로 알려주셔서 이걸 언제 써먹어보지~ 이러면서 수업듣게 되는거 같습니다~! 선생님이랑 공부하면서 자신감도 얻고 영어회화 연습도 열심히 해보겠습니다!ㅎㅎㅎ저와 같은 상황에 있는 분들은 꼭 수업 들어보세여◡̈</div>
                      <span>"</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="white-gradation-overlay"></div>
          </div>
          <div className="btn-wrapper">
            <button className="start-request-btn">고수에게 견적 받기</button>
          </div>
        </div>
      </div>
      <div className="intro-process">
        <div className="intro-container">
          <div className="intro-title">내가 찾는 고수, 숨고에서 만나세요</div>
          <div className="process-list">
            <div className="process-step">
              <img src={Step1} />
              <div className="step-title">1 요청서 작성하기</div>
              <div className="step-description">
                서비스 견적을 위해<br />몇 가지 정보를 알려주세요.
              </div>
            </div>            
            <div className="process-step">
              <img src={Step2} />
              <div className="step-title">2 무료로 견적 받기</div>
              <div className="step-description">
                48시간 내 고수님들이 견적을 보내드려요.
                <br />견적과 프로필, 리뷰를 보고 비교해보세요.
              </div>
            </div>
            <div className="process-step">
              <img src={Step3} />
              <div className="step-title">3 고용하기</div>
              <div className="step-description">
                마음에 드는 고수님과 상담하고
                <br />더 좋은 조건으로 서비스를 제공 받으세요.
              </div>
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="start-request-btn">견적 요청하기</button>
          </div>
        </div>
      </div>
      <div className="intro-qna">
        <div className="intro-container">
          <div className="intro-title">자주 묻는 질문</div>
          <div className="qna-list">
            <div>
              <div className="qna-header">
                <div className="qna-title-wrapper">
                  <span className="qna-q">Q</span>
                  <span className="qna-title">영어 과외 비용은 얼마인가요?</span>
                </div>
                <img className="down" src={Arrow1} alt="다운" />
                <img className="up" src={Arrow2} alt="업" />
              </div>
              {/* qna 답변 */}
              <div className="qna-accordion">
                <article className="qna-content">
                  <p>
                    숨고 내에서 거래되는
                    <a className="qna-link"> 영어 과외의 평균 비용</a>
                    은 시간당 33,000원입니다. 영어 과외는 배우는 목적이나 학년, 연령 등에 따라서 비용이 달라집니다. 또한 과외 시간, 횟수, 장소 등에 따라서도 비용이 달라질 수 있습니다. 학업(성적 향상, 수능 준비), 취업 준비, 비즈니스 영어, 공인시험 준비 등 배우고 싶은 부분을 영어 과외 선생님과 상담 후 진행하는 것을 추천합니다. 
                  </p>
                  <p>
                    <strong></strong>
                    <br />
                  </p>
                </article>
              </div>
              {/* qna 답변 */}
            </div>
            <div>
              <div className="qna-header">
                <div className="qna-title-wrapper">
                  <span className="qna-q">Q</span>
                  <span className="qna-title">영어 문법공부 VS 회화공부, 차이는 무엇인가요?</span>
                </div>
                <img className="down" src={Arrow1} alt="다운" />
                <img className="up" src={Arrow2} alt="업" />
              </div>
              {/* qna 답변 */}
              <div className="qna-accordion">
                <article className="qna-content">
                  <p>영어 문법 공부는 수능이나 토익, 공무원 고시 등 각종 공인시험을 준비하기 위해 필요합니다. 따라서 어휘력을 바탕으로 기초를 다지고 문법에 대한 이해를 고도화하는 전략이 필요합니다. 시험은 정답을 맞히는 과정이므로 모의고사 등을 통해 실력을 점검하는 과정이 필수적입니다.
                    <br />영어 회화 공부는 영어를 듣고 말하는 실력을 키우기 위한 것으로 실생활에서 자주 쓰는 표현을 중심으로 반복적인 연습이 필수적입니다. 조금 틀리더라도 자주 영어를 사용하는 것이 회화 실력을 키우는 데 도움이 됩니다. 다만 회화 실력을 향상하기 위해서도 기초 문법 공부가 필요합니다.
                  </p>
                  <p>
                    <strong></strong>
                    <br />
                  </p>
                </article>
              </div>
              {/* qna 답변 */}
            </div>
            <div>
              <div className="qna-header">
                <div className="qna-title-wrapper">
                  <span className="qna-q">Q</span>
                  <span className="qna-title">영어과외 선생님을 잘 구하는 방법은 무엇인가요?</span>
                </div>
                <img className="down" src={Arrow1} alt="다운" />
                <img className="up" src={Arrow2} alt="업" />
              </div>
              {/* qna 답변 */}
              <div className="qna-accordion">
                <article className="qna-content">
                  <p>영어 과외의 효과를 보기 위해서는 좋은 선생님을 만나는 것이 중요합니다. 좋은 영어 과외 선생님을 만나기 위해서 수강을 결정하기 전에 상담을 받아 보는 것을 추천합니다. 상담할 때 다음과 같은 사항을 확인하면 좋습니다.
                    <br />
                    <br />1. 선생님의 영어 실력(공인 시험 점수 등)
                    <br />2. 선생님의 과외 경력
                    <br />3. 이전 과외 학생의 실력 상승(시험 점수, 합격 후기 등)
                    <br />4. 선생님의 시범 수업 방식
                  </p>
                  <p>
                    <strong></strong>
                    <br />
                  </p>
                </article>
              </div>
              {/* qna 답변 */}
            </div>
            <div>
              <div className="qna-header">
                <div className="qna-title-wrapper">
                  <span className="qna-q">Q</span>
                  <span className="qna-title">효과적인 영어 공부법을 추천해주세요.</span>
                </div>
                <img className="down" src={Arrow1} alt="다운" />
                <img className="up" src={Arrow2} alt="업" />
              </div>
              {/* qna 답변 */}
              <div className="qna-accordion">
                <article className="qna-content">
                  <p>가장 효과적인 영어 공부 방법은 영어의 언어적 구조를 먼저 파악하고 그 이후에 세부적 규칙을 이해하는 것입니다. 영어 공부의 목표나 현재 실력에 따라 차이가 있을 수 있지만 다음의 순서를 따르는 것이 가장 합리적입니다. 
                    <br />
                    <br />1. 영어의 언어적 구조(5형식)를 파악한다.
                    <br />2. 명사, 형용사, 부사의 기능을 안다.
                    <br />3. 전치사에 대해 안다.
                    <br />4. 명사구, 형용사구, 부사구의 개념을 이해한다.
                    <br />5. 동사에 대해 안다.
                    <br />6. 수동태의 개념을 이해한다.
                    <br />7. 한국어와 가장 다른 5형식을 이해한다.
                    <br />8. 관계사에 대해 안다.
                    <br />9. 명사구를 활용하는 연습을 한다.
                    <br />10. 미진한 부분을 찾아 복습한다.
                  </p>
                  <p>
                    <strong></strong>
                    <br />
                  </p>
                </article>
              </div>
              {/* qna 답변 */}
            </div>
          </div>
        </div>
      </div>
      <div className="intro-review">
        <div className="intro-container">
          <div className="intro-title-wrapper">
            <div className="intro-title">숨고 고객 리뷰</div>
            <div className="updated-date">업데이트 2021.12.30</div>
          </div>
          <div className="review-list">
            <div className="review-item">
              <div className="review-card">
                <div className="reviewer-name">s**</div>
                <ul className="star-rate">
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                </ul>
                <div className="review-content">갑자기 외국발령이 나는 바람에 영어회화를 준비할 목적으로 리즈선생님을 만나게 되었습니다 ㅎㅎ 매번 실제 비즈니스에서 사용할 단어, 문장들을 잘 배우고 있습니다. 발음도 잘 짚어주시고 앞으로도 수업이 기대됩니다!.!</div>
              </div>
            </div>
            <div className="review-item">
              <div className="review-card">
                <div className="reviewer-name">c**</div>
                <ul className="star-rate">
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                </ul>
                <div className="review-content">성실함,시간약속,실력 다 갖추시고 수업때 영어발음 듣고만 있어도 좋은 공부가 되는 것 같아요!! 또 그날그날 수업정리도 너무 잘 해주셔서 아직 어렵지만 일상에서 영어를 쓸 때마다 표현이나 배웠던 것들이 쏙쏙 기억나서 아주 좋습니다 최고최고~~</div>
              </div>
            </div>
            <div className="review-item">
              <div className="review-card">
                <div className="reviewer-name">윤**</div>
                <ul className="star-rate">
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                  <li><img src={FullStar} /></li>
                </ul>
                <div className="review-content">친절하시고 학생의 성향에 맞춰서 잘 가르쳐주십니다. 수업 자료도 풍부하고 항상 영어에 대한 흥미를 유지할 수 있도록 다양한 주제로 수업해주셔서 즐기면서 수업받고 있습니다. 영어회화 학원도 다녀봤었지만 학원 못지않게 체계적이고 오히려 더 알찬 거 같아요. 완전 대만족합니당! 혹시 고민중이신 분들 고민마시고 그냥 이분하고 수업 하세요!ㅎㅎㅎ</div>
              </div>
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="start-request-btn">견적 요청하기</button>
          </div>
        </div>
      </div>
      <div className="intro-encouraging">
        <div className="intro-container">
          <div className="encouraging-text">
            숨고에서<span>367,796</span>명의 고객이
            <br />영어 과외 고수를 찾았어요
          </div>
          <div className="btn-wrapper">
            <button className="start-request-btn">견적 요청하기</button>
          </div>
        </div>
      </div>
      <div className="intro-pro-signup">
        <div className="intro-container">
          <div>
            <div className="desc">혹시 전문가이신가요?</div>
            <div className="sub-desc">숨고에서 새로운 고객을 만나세요</div>
          </div>
          <a className="pro-signup-btn"> 고수가입 </a>
        </div>
      </div>
    </section>
  )
}

export default SendRequest;