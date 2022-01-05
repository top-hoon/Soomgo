import React from 'react';
import '../assets/css/common.css';
import '../assets/css/categories.css';

import SearchIcon from '../assets/images/search-2.svg';
import Lesson from '../assets/images/lesson.svg';
import HomeLiving from '../assets/images/home-living.svg';
import Event from '../assets/images/event.svg';
import Business from '../assets/images/business.svg';
import DesignDevelopment from '../assets/images/design-development.svg';
import HealthBeauty from '../assets/images/health-beauty.svg';
import PartTimeJob from '../assets/images/part-time-job.svg';
import Etc from '../assets/images/etc.svg';


function Categories() {
  return (
    <section className="categories-wrap">
      <div className="categories-title">
        <div className="dimmed"></div>
        <div className="contents">
          <h1>레슨</h1>
          <p>지금 숨고와 함께 시작해보세요</p>
          <div className="service-searcher">
            <form action="">
              <div className="input-group">
                <input type="text" placeholder="어떤 분야의 전문가를 찾으시나요?" />
                <span>
                  <button>
                    <img src={SearchIcon} />
                    <span>고수찾기</span>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="category-btns">
        <ul className="category-btn-list">
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={Lesson} />
                <p className="category-title">레슨</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={HomeLiving} />
                <p className="category-title">홈/리빙</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={Event} />
                <p className="category-title">이벤트</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={Business} />
                <p className="category-title">비즈니스</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={DesignDevelopment} />
                <p className="category-title">디자인/개발</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={HealthBeauty} />
                <p className="category-title">건강/미용</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={PartTimeJob} />
                <p className="category-title">알바</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link">
              <div className="category-icon">
                <img src={Etc} />
                <p className="category-title">기타</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="popular-service">
        <h2>인기 서비스</h2>
        <div className="wrap">
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-1"></div>
                  <h4 className="card-title">방송댄스 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-2"></div>
                  <h4 className="card-title">보컬 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-3"></div>
                  <h4 className="card-title">골프 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-4"></div>
                  <h4 className="card-title">퍼스널트레이닝(PT)</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-5"></div>
                  <h4 className="card-title">기타 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-6"></div>
                  <h4 className="card-title">중국어 과외</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-7"></div>
                  <h4 className="card-title">비즈니스 영어</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-8"></div>
                  <h4 className="card-title">수학 과외</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-9"></div>
                  <h4 className="card-title">영어 과외</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="all-service">
        <h2>모든 서비스</h2>
        <ul className="categories">
          <li>
            <h3>학업</h3>
            <ul className="services">
              <li>
                <a className="service-item" href="/SendRequest">영어 과외</a>
              </li>
              <li>
                <a className="service-item">수학 과외</a>
              </li>
              <li>
                <a className="service-item">국어 과외</a>
              </li>
              <li>
                <a className="service-item">과학 과외</a>
              </li>
              <li>
                <a className="service-item">사회 과외</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>외국어</h3>
            <ul className="services">
              <li>
                <a className="service-item">영어 과외</a>
              </li>
              <li>
                <a className="service-item">비즈니스 영어</a>
              </li>
              <li>
                <a className="service-item">화상영어/전화영어 회화</a>
              </li>
              <li>
                <a className="service-item">중국어 과외</a>
              </li>
              <li>
                <a className="service-item">비즈니스 중국어</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>외국어시험</h3>
            <ul className="services">
              <li>
                <a className="service-item">TOEIC/speaking/writing 과외</a>
              </li>
              <li>
                <a className="service-item">OPIc 과외</a>
              </li>
              <li>
                <a className="service-item">IELTS 과외</a>
              </li>
              <li>
                <a className="service-item">TOEFL 과외</a>
              </li>
              <li>
                <a className="service-item">HSK 과외</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>공예</h3>
            <ul className="services">
              <li>
                <a className="service-item">플라워꽃꽂이 레슨</a>
              </li>
              <li>
                <a className="service-item">LED 플라워 레슨</a>
              </li>
              <li>
                <a className="service-item">네온공예 레슨</a>
              </li>
              <li>
                <a className="service-item">가구/목공예 레슨</a>
              </li>
              <li>
                <a className="service-item">가죽공예 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>미술</h3>
            <ul className="services">
              <li>
                <a className="service-item">미술 회화 레슨</a>
              </li>
              <li>
                <a className="service-item">소묘/드로잉 레슨</a>
              </li>
              <li>
                <a className="service-item">디지털 드로잉 레슨</a>
              </li>
              <li>
                <a className="service-item">만화/웹툰/애니 레슨</a>
              </li>
              <li>
                <a className="service-item">서예 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>음악이론/보컬</h3>
            <ul className="services">
              <li>
                <a className="service-item">보컬 레슨</a>
              </li>
              <li>
                <a className="service-item">랩 레슨</a>
              </li>
              <li>
                <a className="service-item">비트박스 레슨</a>
              </li>
              <li>
                <a className="service-item">미디/컴퓨터작곡 레슨</a>
              </li>
              <li>
                <a className="service-item">음향/레코딩 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>연기/마술</h3>
            <ul className="services">
              <li>
                <a className="service-item">연출 레슨</a>
              </li>
              <li>
                <a className="service-item">연기 레슨</a>
              </li>
              <li>
                <a className="service-item">뮤지컬 레슨</a>
              </li>
              <li>
                <a className="service-item">마술 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>국악</h3>
            <ul className="services">
              <li>
                <a className="service-item">판소리 레슨</a>
              </li>
              <li>
                <a className="service-item">민요 레슨</a>
              </li>
              <li>
                <a className="service-item">정가 레슨</a>
              </li>
              <li>
                <a className="service-item">가야금 레슨</a>
              </li>
              <li>
                <a className="service-item">거문고 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>사진/영상</h3>
            <ul className="services">
              <li>
                <a className="service-item">사진 촬영/편집 레슨</a>
              </li>
              <li>
                <a className="service-item">영상 촬영/편집 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>취미/생활</h3>
            <ul className="services">
              <li>
                <a className="service-item">인테리어 기술교육</a>
              </li>
              <li>
                <a className="service-item">드론 레슨</a>
              </li>
              <li>
                <a className="service-item">글쓰기 레슨</a>
              </li>
              <li>
                <a className="service-item">글씨교정 레슨</a>
              </li>
              <li>
                <a className="service-item">수어 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>투자/부업/N잡</h3>
            <ul className="services">
              <li>
                <a className="service-item">유튜브 크리에이터 레슨</a>
              </li>
              <li>
                <a className="service-item">파워블로거 레슨</a>
              </li>
              <li>
                <a className="service-item">주식 레슨</a>
              </li>
              <li>
                <a className="service-item">선물 레슨</a>
              </li>
              <li>
                <a className="service-item">공유숙박 컨설팅(셰어/게스트하우스 등)</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>요리/조리</h3>
            <ul className="services">
              <li>
                <a className="service-item">요리/조리 레슨</a>
              </li>
              <li>
                <a className="service-item">푸드카빙 레슨</a>
              </li>
              <li>
                <a className="service-item">베이킹 레슨</a>
              </li>
              <li>
                <a className="service-item">초콜릿 레슨</a>
              </li>
              <li>
                <a className="service-item">커피 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>댄스</h3>
            <ul className="services">
              <li>
                <a className="service-item">방송댄스 레슨</a>
              </li>
              <li>
                <a className="service-item">스트릿댄스 레슨</a>
              </li>
              <li>
                <a className="service-item">일반댄스 레슨</a>
              </li>
              <li>
                <a className="service-item">발레 레슨</a>
              </li>
              <li>
                <a className="service-item">현대무용 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>스포츠/건강</h3>
            <ul className="services">
              <li>
                <a className="service-item">퍼스널트레이닝(PT)</a>
              </li>
              <li>
                <a className="service-item">크로스핏</a>
              </li>
              <li>
                <a className="service-item">스피닝</a>
              </li>
              <li>
                <a className="service-item">필라테스</a>
              </li>
              <li>
                <a className="service-item">요가</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>계절스포츠</h3>
            <ul className="services">
              <li>
                <a className="service-item">스키 강습</a>
              </li>
              <li>
                <a className="service-item">스노우보드 강습</a>
              </li>
              <li>
                <a className="service-item">아이스 스케이트 강습</a>
              </li>
              <li>
                <a className="service-item">카누/카약 강습</a>
              </li>
              <li>
                <a className="service-item">서핑 강습</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>실무교육/디자인</h3>
            <ul className="services">
              <li>
                <a className="service-item">포토샵 레슨</a>
              </li>
              <li>
                <a className="service-item">일러스트레이터 레슨</a>
              </li>
              <li>
                <a className="service-item">인디자인 레슨</a>
              </li>
              <li>
                <a className="service-item">그래픽디자인 레슨</a>
              </li>
              <li>
                <a className="service-item">UI/UX 디자인 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>실무교육/마케팅</h3>
            <ul className="services">
              <li>
                <a className="service-item">데이터 분석 레슨</a>
              </li>
              <li>
                <a className="service-item">컴색엔진 최적화(SEO) 레슨</a>
              </li>
              <li>
                <a className="service-item">키워드 광고(SEM) 레슨</a>
              </li>
              <li>
                <a className="service-item">콘텐츠/바이럴 마케팅 레슨</a>
              </li>
              <li>
                <a className="service-item">디스플레이 광고 레슨</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>취업준비</h3>
            <ul className="services">
              <li>
                <a className="service-item">이력서/자소서 컨설팅</a>
              </li>
              <li>
                <a className="service-item">인적성/필기시험 컨설팅</a>
              </li>
              <li>
                <a className="service-item">면접 컨설팅</a>
              </li>
              <li>
                <a className="service-item">스피치 컨설팅</a>
              </li>
              <li>
                <a className="service-item">취업 선컬팅</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>시험/자격증</h3>
            <ul className="services">
              <li>
                <a className="service-item">공무원 시험 준비</a>
              </li>
              <li>
                <a className="service-item">공인중개사 준비</a>
              </li>
              <li>
                <a className="service-item">교원 임용시험 준비</a>
              </li>
              <li>
                <a className="service-item">간호사 준비</a>
              </li>
              <li>
                <a className="service-item">타투이스트 준비</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>패션/뷰티</h3>
            <ul className="services">
              <li>
                <a className="service-item">뷰티/미용 레슨</a>
              </li>
              <li>
                <a className="service-item">패션디자인 레슨</a>
              </li>
              <li>
                <a className="service-item">모델 레슨</a>
              </li>
              <li>
                <a className="service-item">퍼스널컬러자격증 준비</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Categories;