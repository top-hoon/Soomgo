import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get('/category2/list')
    .then(res => setCategories(res.data))
    .catch(err => console.log(err))

    {categories.map(category => {
      axios.get(`/category3/list?cate2_idx=${category.idx}`)
      .then(res => setServices(res.data))
      .catch(err => console.log(err))
    })}
  },[])

  for (let i=0; i<services.length; i++) {
    console.log(
      '2차 카테고리 :'+services[i].cate2_idx+' / '+
      '3차 카테고리 :'+services[i].cate_name
    )
  }

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
                    <img src={SearchIcon} alt="검색아이콘"/>
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
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={Lesson} alt="레슨"/>
                <p className="category-title">레슨</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={HomeLiving} alt="홈/리빙"/>
                <p className="category-title">홈/리빙</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={Event} alt="이벤트"/>
                <p className="category-title">이벤트</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={Business} alt="비즈니스"/>
                <p className="category-title">비즈니스</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={DesignDevelopment} alt="디자인/개발"/>
                <p className="category-title">디자인/개발</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={HealthBeauty} alt="건강/미용"/>
                <p className="category-title">건강/미용</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={PartTimeJob} alt="알바"/>
                <p className="category-title">알바</p>
              </div>
            </a>
          </li>
          <li className="category">
            <a className="router-link" href="/Categories">
              <div className="category-icon">
                <img src={Etc} alt="기타"/>
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
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-1"></div>
                  <h4 className="card-title">방송댄스 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-2"></div>
                  <h4 className="card-title">보컬 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-3"></div>
                  <h4 className="card-title">골프 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-4"></div>
                  <h4 className="card-title">퍼스널트레이닝(PT)</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-5"></div>
                  <h4 className="card-title">기타 레슨</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-6"></div>
                  <h4 className="card-title">중국어 과외</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-7"></div>
                  <h4 className="card-title">비즈니스 영어</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-8"></div>
                  <h4 className="card-title">수학 과외</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a className="service-link" href="/SendRequest">
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
          {categories.map(category => 
            <li key={category.idx}>
              <h3>{category.cate_name}</h3>
              <ul className="services">
              </ul>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Categories;