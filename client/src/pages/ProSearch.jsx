import React from 'react';
import '../assets/css/common.css';
import '../assets/css/proSearch.css';

import Star from '../assets/images/star2.svg';
import Pay from '../assets/images/pay.svg';
import ReviewIcon from '../assets/images/review-icon.svg'
import topBtn from '../assets/images/topBtn.svg'

function ProSearch() {
  return(
    <main class="pro-list container">
      <h1 class="page-heading-h1">고수찾기</h1>
      <header>
        <ol class="page-breadcrumbs list-inline page-breadcrumbs">
          <li><a href="/" class="router-link-active">숨고</a></li>
          <li class="is-sibling">
            <a href="/search/pro" class="router-link-exact-active router-link-active">지역</a>
          </li>
          <li class="is-sibling">
            <a href="/search/pro" class="router-link-exact-active router-link-active">카테고리</a>
          </li>
        </ol>
        <form class="pro-list--filters">
          <div class="pro-list--filter-group">
            <button type="button" class="SearchProFilterForm-input has-icon-left icon-location is-empty">지역</button>
            <button type="button" class="SearchProFilterForm-input has-icon-left icon-category is-empty">카테고리</button>
          </div>
          <section class="pro-list--footer">
            <strong class="pro-list--total-count">
              175,276
              <span>명의 고수</span>
            </strong>
            <div class="dropdown b-dropdown pro-list--sort show btn-group">
              <button type="button" class="btn dropdown-toggle btn-link btn-sm dropdown-toggle-no-caret">
                <span class="current-sort">리뷰순</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-right">
                <li class="sort-item active">
                  <a href="#" target="_self" class="dropdown-item"> 리뷰순 </a>
                </li>
                <li class="sort-item">
                  <a href="#" target="_self" class="dropdown-item"> 최근활동순 </a>
                </li>
                <li class="sort-item">
                  <a href="#" target="_self" class="dropdown-item"> 평점순 </a>
                </li>
                <li class="sort-item">
                  <a href="#" target="_self" class="dropdown-item"> 고용순 </a>
                </li>
              </ul>
            </div>
          </section>
        </form>
      </header>
      <article>
        <div class="list-item">
          <a href="/profile/users/246964?prev=searchPro">
            <div class="search-pro--item">
              <div class="user-profile-picture profile-picture">
                <div class="is-square"></div>
              </div>
              <div class="profile-info text-truncate">
                <h5 class="profile-name text-truncate">⭐집을빨래하다(숨고 1위)⭐</h5>
                <p class="profile-company-name text-truncate">☆ 숨고 압도적 1위☆ SBS "성공의 정석 꾼 207회 출연" 눈으로 보시고 판단해 주세요 </p>
                <div class="profile-badges">
                  <div class="review-rate">
                    <img src={Star} />
                    <span class="rate">4.7</span>
                    <span class="count">(1,135)</span>
                  </div>
                  <span class="badge-item">5,463회 고용</span>
                  <span class="badge-item soomgo-pay">
                    <img src={Pay} alt="Soomgo pay" />
                  </span>
                </div>
                <div class="profile-review">
                  <img src={ReviewIcon} />
                  <strong>이**</strong>
                  <blockquote class="text-truncate">세입자가너무더럽게해놓고가서 할말을잃었는데..새집처럼깨끗하게 청소해주셨어요~! 구석구석신경많이써주셧네요~감사드립니다~~^^</blockquote>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="list-item">
          <a href="/profile/users/246964?prev=searchPro">
            <div class="search-pro--item">
              <div class="user-profile-picture profile-picture">
                <div class="is-square"></div>
              </div>
              <div class="profile-info text-truncate">
                <h5 class="profile-name text-truncate">⭐집을빨래하다(숨고 1위)⭐</h5>
                <p class="profile-company-name text-truncate">☆ 숨고 압도적 1위☆ SBS "성공의 정석 꾼 207회 출연" 눈으로 보시고 판단해 주세요 </p>
                <div class="profile-badges">
                  <div class="review-rate">
                    <img src={Star} />
                    <span class="rate">4.7</span>
                    <span class="count">(1,135)</span>
                  </div>
                  <span class="badge-item">5,463회 고용</span>
                  <span class="badge-item soomgo-pay">
                    <img src={Pay} alt="Soomgo pay" />
                  </span>
                </div>
                <div class="profile-review">
                  <img src={ReviewIcon} />
                  <strong>이**</strong>
                  <blockquote class="text-truncate">세입자가너무더럽게해놓고가서 할말을잃었는데..새집처럼깨끗하게 청소해주셨어요~! 구석구석신경많이써주셧네요~감사드립니다~~^^</blockquote>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="list-item">
          <a href="/profile/users/246964?prev=searchPro">
            <div class="search-pro--item">
              <div class="user-profile-picture profile-picture">
                <div class="is-square"></div>
              </div>
              <div class="profile-info text-truncate">
                <h5 class="profile-name text-truncate">⭐집을빨래하다(숨고 1위)⭐</h5>
                <p class="profile-company-name text-truncate">☆ 숨고 압도적 1위☆ SBS "성공의 정석 꾼 207회 출연" 눈으로 보시고 판단해 주세요 </p>
                <div class="profile-badges">
                  <div class="review-rate">
                    <img src={Star} />
                    <span class="rate">4.7</span>
                    <span class="count">(1,135)</span>
                  </div>
                  <span class="badge-item">5,463회 고용</span>
                  <span class="badge-item soomgo-pay">
                    <img src={Pay} alt="Soomgo pay" />
                  </span>
                </div>
                <div class="profile-review">
                  <img src={ReviewIcon} />
                  <strong>이**</strong>
                  <blockquote class="text-truncate">세입자가너무더럽게해놓고가서 할말을잃었는데..새집처럼깨끗하게 청소해주셨어요~! 구석구석신경많이써주셧네요~감사드립니다~~^^</blockquote>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="list-item">
          <a href="/profile/users/246964?prev=searchPro">
            <div class="search-pro--item">
              <div class="user-profile-picture profile-picture">
                <div class="is-square"></div>
              </div>
              <div class="profile-info text-truncate">
                <h5 class="profile-name text-truncate">⭐집을빨래하다(숨고 1위)⭐</h5>
                <p class="profile-company-name text-truncate">☆ 숨고 압도적 1위☆ SBS "성공의 정석 꾼 207회 출연" 눈으로 보시고 판단해 주세요 </p>
                <div class="profile-badges">
                  <div class="review-rate">
                    <img src={Star} />
                    <span class="rate">4.7</span>
                    <span class="count">(1,135)</span>
                  </div>
                  <span class="badge-item">5,463회 고용</span>
                  <span class="badge-item soomgo-pay">
                    <img src={Pay} alt="Soomgo pay" />
                  </span>
                </div>
                <div class="profile-review">
                  <img src={ReviewIcon} />
                  <strong>이**</strong>
                  <blockquote class="text-truncate">세입자가너무더럽게해놓고가서 할말을잃었는데..새집처럼깨끗하게 청소해주셨어요~! 구석구석신경많이써주셧네요~감사드립니다~~^^</blockquote>
                </div>
              </div>
            </div>
          </a>
        </div>
      </article>
      <a class="top-btn">
        <img src={topBtn} alt="위로 가기" /></a>
    </main>
  )
}

export default ProSearch;