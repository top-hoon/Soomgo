import React from 'react';

import '../assets/css/common.css';
import '../assets/css/proSignup.css';

function ProSignup(){
    const slickTrack = {
        opacity: '1', 
        width: '8730px', 
        transform: 'translate3d(-970px, 0px, 0px)'
    };
    const image1 = {
        backgroundImage: 'url("https://dmmj3ljielax6.cloudfront.net/upload/testimonial/7138-437.jpg")',
    }; 
    const image2 = {
        backgroundImage: 'url("https://dmmj3ljielax6.cloudfront.net/upload/testimonial/8730-10.jpg")',
    };
    const image3 = {
        backgroundImage: 'url("https://dmmj3ljielax6.cloudfront.net/upload/testimonial/3781-144.JPG")',
    };
    const image4 = {
        backgroundImage: 'url("https://dmmj3ljielax6.cloudfront.net/upload/testimonial/70079-795.jpg")',
    }; 
    
    return(
        
        <div className="pro-signup">
            <div class="hero-image-container">
                <div class="container container">
                    <h1>
                        고수로 등록하고,  <br />숨고에서 고객을 만나보세요!
                    </h1>
                    <p> 숨고는 국내 최대 규모의 생활서비스 플랫폼입니다.<br/> 가장 빠르고 간편하게 고객을 찾을 수 있습니다. </p>
                </div>
            </div>
            <div class="category-container">
                <div class="category1-box container">
                    <h3>고수로 가입하실 분야를 선택하세요</h3>
                    <ul class="category1-buttons list-inline flex">
                        <li class="category">
                            <a href="/ProService" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/lesson.svg" alt="레슨" />
                                    <p class="category-title p2">레슨</p>
                                </div>
                            </a>
                        </li>
                        <li class="category">
                            <a href="/pro/welcome/홈-리빙" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/home-living.svg" alt="홈/리빙" />
                                    <p class="category-title p2">홈/리빙</p>
                                </div>
                            </a>
                        </li>
                        <li class="category">
                            <a href="/pro/welcome/이벤트" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/event.svg" alt="이벤트" />
                                    <p class="category-title p2">이벤트</p>
                                </div>
                            </a>
                        </li>
                        <li class="category">
                            <a href="/pro/welcome/비즈니스" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/business.svg" alt="비즈니스" />
                                    <p class="category-title p2">비즈니스</p>
                                </div>
                            </a>
                        </li>
                        <li class="category">
                            <a href="/pro/welcome/디자인-개발" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/design-development.svg" alt="디자인/개발" />
                                    <p class="category-title p2">디자인/개발</p>
                                </div>
                            </a>
                        </li>
                        <li class="category">
                            <a href="/pro/welcome/건강-미용" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/health-beauty.svg" alt="건강/미용"/>
                                        <p class="category-title p2">건강/미용</p>
                                </div>
                            </a>
                        </li>
                        <li class="category">
                            <a href="/pro/welcome/알바" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/part-time-job.svg" alt="알바"/>
                                        <p class="category-title p2">알바</p>
                                </div>
                            </a>
                        </li>
                        <li class="category">
                            <a href="/pro/welcome/기타" class="">
                                <div class="category-icon">
                                    <img src="https://assets.cdn.soomgo.com/icons/category1/etc.svg" alt="기타"/>
                                    <p class="category-title p2">기타</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="people">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>많은 사람들이 당신의 서비스를 기다립니다</h2>
                            <p class="headline"> 많은 고객들이 조건에 딱! 맞는 고수를 찾고 있어요. 고객에게 필요한 딱! 맞는 고수가 되어보세요. </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <h3>9,941,032</h3>
                            <p class="label-count">누적 요청서</p>
                        </div>
                        <div class="col-4">
                            <h3>720,093</h3>
                            <p class="label-count">등록된 고수</p>
                        </div>
                        <div class="col-4">
                            <h3>4.9 / 5점</h3>
                            <p class="label-count">평균 리뷰별점</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="operation">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>숨고는 어떻게 운영되나요?</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <figure class="num">
                                <img src="https://static.cdn.soomgo.com/static/img/home/safety_num_1.png" alt=""/>
                                    <h3>고객의 요청을 받아보세요</h3>
                                    <figcaption> 고객이 필요한 서비스의 요청서를 작성하면 숨고가 검토 후 고수님께 무료로 보내드려요. </figcaption>
                             </figure>
                        </div>
                        <div class="col-4">
                            <figure class="num">
                                <img src="https://static.cdn.soomgo.com/static/img/home/safety_num_2.png" alt=""/>
                                    <h3>맞춤 견적을 보내세요</h3>
                                    <figcaption> 요청서 확인 후 간단히 견적금액만 입력하면 프로필과 함께 고객에게 메시지로 전송돼요. </figcaption>
                            </figure>
                        </div>
                        <div class="col-4">
                            <figure class="num">
                                <img src="https://static.cdn.soomgo.com/static/img/home/safety_num_3.png" alt=""/>
                                <h3>상담 후 거래하세요</h3>
                                <figcaption> 원하는 고객과 채팅 및 전화(안심번호)로 자세한 사항을 협의하고 거래하세요. </figcaption>
                            </figure>
                        </div>
                        <div class="col-12">
                            <a href="/#" class="btn btn-primary btn-lg" target="_self">더 알아보기</a>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-2cebe516 data-v-7d8e81a2 id="testimonial">
                <div data-v-2cebe516 class="container">
                    <div data-v-2cebe516 class="row">
                        <div data-v-2cebe516 class="col-12">
                            <h2 data-v-2cebe516>숨은 고수들의 생생한 후기</h2>
                        </div>
                    </div>
                    <div data-v-0efc47ab data-v-2cebe516 class="testimonial-summary-list-comp">
                        <div data-v-22f5ed86 data-v-0efc47ab class="summary-list slick-initialized slick-slider slick-dotted">
                            <div class="slick-list draggable">
                                <div class="slick-track" style={slickTrack}>
                                    <div class="slick-slide slick-cloned" data-slick-index="-1" id aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image1}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>바느질/재봉틀 레슨</h2>
                                                                <h3 data-v-01f026ba>박현주</h3>
                                                            </div>
                                                        </div>
                                                        <div data-v-01f026ba data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>바느질/재봉틀 레슨</h2>
                                                            <h3 data-v-01f026ba>박현주</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p  data-v-01f026ba>처음 숨고 시작했을 때보다 요청 양이 많이 늘어난 것 같아요. 계속 이렇게 숨고가 번창해서 요청이 늘어난다면 회사를 그만두고 이 쪽에 전념해야 하나 고민될 정도에요!</p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image2}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>드럼 레슨</h2>
                                                                <h3 data-v-01f026ba>김정욱</h3>
                                                            </div>
                                                        </div>
                                                        <div data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>드럼 레슨</h2>
                                                            <h3 data-v-01f026ba>김정욱</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>예전에 학원에서는 수수료 50%를 떼이는 게 너무 억울했었는데 숨고는 합리적이라 생각해요! 현재 37명 레슨 중인데, 그 중 대부분이 숨고로 알게 된 분들이에요. 주위 여러 친구들한테 숨고를 추천했어요.</p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image3}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>천연비누/화장품 레슨</h2>
                                                                <h3 data-v-01f026ba>최윤선</h3>
                                                            </div>
                                                        </div>
                                                        <div data-v-01f026ba data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>천연비누/화장품 레슨</h2>
                                                            <h3 data-v-01f026ba>최윤선</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>정말 어려운 시기에 숨고가 돌파구를 마련해주었어요. 숨고는 이용법을 터득만 하면 많은 분들이 답을 주시더라고요. 진짜 중요한게 리뷰인 것 같아요. 저도 리뷰가 쌓이면서 도움이 많이 된 것 같아요. </p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide" data-slick-index="2" aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image4}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>피부 관리</h2>
                                                                <h3 data-v-01f026ba>신재오</h3>
                                                            </div>
                                                        </div>
                                                        <div data-v-01f026ba data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>피부 관리</h2>
                                                            <h3 data-v-01f026ba>신재오</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>저희 에스테틱 한달 평균 고객이 300명 정도 되는데, 숨고를 시작하면서 한 달에 10~15분이 더 늘었어요. 숨고로 방문하신 10분 중 7~8분은 회원으로 전환돼요. 실질적 수요자들이 많으신 것 같아요.</p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide" data-slick-index="3" aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image1}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>바느질/재봉틀 레슨</h2>
                                                                <h3 data-v-01f026ba>박현주</h3>
                                                            </div>
                                                        </div>
                                                        <div data-v-01f026ba data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>바느질/재봉틀 레슨</h2>
                                                            <h3 data-v-01f026ba>박현주</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>처음 숨고 시작했을 때보다 요청 양이 많이 늘어난 것 같아요. 계속 이렇게 숨고가 번창해서 요청이 늘어난다면 회사를 그만두고 이 쪽에 전념해야 하나 고민될 정도에요!</p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-cloned" data-slick-index="4" id aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image2}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>드럼 레슨</h2>
                                                                <h3 data-v-01f026ba>김정욱</h3>
                                                            </div>
                                                        </div>
                                                        <div data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>드럼 레슨</h2>
                                                            <h3 data-v-01f026ba>김정욱</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>예전에 학원에서는 수수료 50%를 떼이는 게 너무 억울했었는데 숨고는 합리적이라 생각해요! 현재 37명 레슨 중인데, 그 중 대부분이 숨고로 알게 된 분들이에요. 주위 여러 친구들한테 숨고를 추천했어요.</p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-cloned" data-slick-index="5" id aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image3}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>천연비누/화장품 레슨</h2>
                                                                <h3 data-v-01f026ba>최윤선</h3>
                                                            </div>
                                                        </div>
                                                        <div data-v-01f026ba data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>천연비누/화장품 레슨</h2>
                                                            <h3 data-v-01f026ba>최윤선</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>정말 어려운 시기에 숨고가 돌파구를 마련해주었어요. 숨고는 이용법을 터득만 하면 많은 분들이 답을 주시더라고요. 진짜 중요한게 리뷰인 것 같아요. 저도 리뷰가 쌓이면서 도움이 많이 된 것 같아요. </p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-cloned" data-slick-index="6" id aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12" style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image4}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>피부 관리</h2>
                                                                <h3 data-v-01f026ba>신재오</h3>
                                                            </div>
                                                        </div>
                                                        <div data-v-01f026ba data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>피부 관리</h2>
                                                            <h3 data-v-01f026ba>신재오</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>저희 에스테틱 한달 평균 고객이 300명 정도 되는데, 숨고를 시작하면서 한 달에 10~15분이 더 늘었어요. 숨고로 방문하신 10분 중 7~8분은 회원으로 전환돼요. 실질적 수요자들이 많으신 것 같아요.</p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-cloned" data-slick-index="7" id aria-hidden="true" style={{width: '970px'}}>
                                        <div>
                                            <div data-v-0efc47ab class="col-sm-12"  style={{width: '100%', display: 'inline-block'}}>
                                                <div data-v-01f026ba data-v-0efc47ab class="s-card testimonial-summary">
                                                    <div data-v-01f026ba class="row">
                                                        <div data-v-01f026ba data-name="provider" style={image1}>
                                                            <div data-v-01f026ba data-name="provider-info" class="hidden-xs">
                                                                <h2 data-v-01f026ba>바느질/재봉틀 레슨</h2>
                                                                <h3 data-v-01f026ba>박현주</h3>
                                                            </div>
                                                        </div>
                                                        <div data-v-01f026ba data-name="provider-info" class="visible-xs">
                                                            <h2 data-v-01f026ba>바느질/재봉틀 레슨</h2>
                                                            <h3 data-v-01f026ba>박현주</h3>
                                                        </div>
                                                        <div data-v-01f026ba data-name="content" class="col-xs-12 col-sm-10">
                                                            <p data-v-01f026ba>처음 숨고 시작했을 때보다 요청 양이 많이 늘어난 것 같아요. 계속 이렇게 숨고가 번창해서 요청이 늘어난다면 회사를 그만두고 이 쪽에 전념해야 하나 고민될 정도에요!</p>
                                                        </div>
                                                        <a data-v-01f026ba class="view-more">더보기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slick-navigation">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgNyAxMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzRENEY1NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9Ii44IiBkPSJNNiAxTDEgNmw1IDUiLz4KPC9zdmc+Cg==" class="angle-icon prev"/>
                            <div class="slick-dots-wrap">
                                <ul class="slick-dots">
                                    <li class="slick-active">
                                        <button type="button">1</button>
                                    </li>
                                    <li>
                                        <button type="button">2</button>
                                    </li>
                                    <li>
                                        <button type="button">3</button>
                                    </li>
                                    <li>
                                        <button type="button">4</button>
                                    </li>
                                </ul>
                            </div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgNyAxMiI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzRENEY1NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9Ii44IiBkPSJNMSAxbDUgNS01IDUiLz4KPC9zdmc+Cg==" class="angle-icon next"/>
                        </div>
                        <a href="#" target="_self" class="btn btn-view-more btn-primary">후기 더보기</a>
                    </div>
                </div>
            </div>
            <div id="clip">
                <div class="container">
                    <div class="row">
                        <div class="clip-title col-12">
                            <h2>고수 성공 스토리</h2>
                            <p class="headline">숨고를 통해 성공한 고수의 스토리를 들어보세요.</p>
                        </div>
                    </div>
                    <div class="row clip-row">
                        <div class="clip-wrap lg">
                            <div class="clip-bg clip-bg-04">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA7ZcssPkF4jwCrFQS08mHeDcgFIwrG+SnalgH+rOjbAry1XeLWkY1RF0AAAFTSURBVDjLlZXZkoJADEXTNIssCgoICIKznf//xClrGNka0fOcSvqmkxuZ4B+TYK8cR+2D5OjLGufYY4QXn8VEZDlwyEId1XWkw+wAjhXJglBBuZMRuxLURaa4FthaZmgbLFdG3K7QiYEOrrdRPhtPixHtYQ85LYqTrHAqsKTnArmskkOvKFJ08oQKlfaFbXlK8Ff81KDlKTnNXUJMKxu0xCK+x0422OH5cuQgmxw4SkImE2xDSzMSCQhlAh9f7mJiCGQ/1wx8zl+t2YsiXQRCO53ZFCUOtSEQ1fkyUOOsBYI1CzSXRlX+tLRRDLTpQkxAaFBtaE/C93YfM5LlF9on4xe+PhQSU8oGJfHdSJytwdU455dWwcb6X65qY7mil9a14ecNAxgsJV/J11vKyKQq8/u43t62vV7RhpEOpA9rdt2HNacrZl8wopiYvel8NI3hfPwCZkgln6gYShQAAAAASUVORK5CYII=" alt="재생"/>
                                <h3> 포토그래퍼 <small>강휘원 고수</small></h3>
                            </div>
                        </div>
                        <div class="clip-wrap">
                            <div class="clip-bg clip-bg-05">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA7ZcssPkF4jwCrFQS08mHeDcgFIwrG+SnalgH+rOjbAry1XeLWkY1RF0AAAFTSURBVDjLlZXZkoJADEXTNIssCgoICIKznf//xClrGNka0fOcSvqmkxuZ4B+TYK8cR+2D5OjLGufYY4QXn8VEZDlwyEId1XWkw+wAjhXJglBBuZMRuxLURaa4FthaZmgbLFdG3K7QiYEOrrdRPhtPixHtYQ85LYqTrHAqsKTnArmskkOvKFJ08oQKlfaFbXlK8Ff81KDlKTnNXUJMKxu0xCK+x0422OH5cuQgmxw4SkImE2xDSzMSCQhlAh9f7mJiCGQ/1wx8zl+t2YsiXQRCO53ZFCUOtSEQ1fkyUOOsBYI1CzSXRlX+tLRRDLTpQkxAaFBtaE/C93YfM5LlF9on4xe+PhQSU8oGJfHdSJytwdU455dWwcb6X65qY7mil9a14ecNAxgsJV/J11vKyKQq8/u43t62vV7RhpEOpA9rdt2HNacrZl8wopiYvel8NI3hfPwCZkgln6gYShQAAAAASUVORK5CYII=" alt="재생" />
                                <h3> 이사 <small>박환준 고수</small></h3>
                            </div>
                        </div>
                        <div class="clip-wrap">
                            <div class="clip-bg clip-bg-06">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA7ZcssPkF4jwCrFQS08mHeDcgFIwrG+SnalgH+rOjbAry1XeLWkY1RF0AAAFTSURBVDjLlZXZkoJADEXTNIssCgoICIKznf//xClrGNka0fOcSvqmkxuZ4B+TYK8cR+2D5OjLGufYY4QXn8VEZDlwyEId1XWkw+wAjhXJglBBuZMRuxLURaa4FthaZmgbLFdG3K7QiYEOrrdRPhtPixHtYQ85LYqTrHAqsKTnArmskkOvKFJ08oQKlfaFbXlK8Ff81KDlKTnNXUJMKxu0xCK+x0422OH5cuQgmxw4SkImE2xDSzMSCQhlAh9f7mJiCGQ/1wx8zl+t2YsiXQRCO53ZFCUOtSEQ1fkyUOOsBYI1CzSXRlX+tLRRDLTpQkxAaFBtaE/C93YfM5LlF9on4xe+PhQSU8oGJfHdSJytwdU455dWwcb6X65qY7mil9a14ecNAxgsJV/J11vKyKQq8/u43t62vV7RhpEOpA9rdt2HNacrZl8wopiYvel8NI3hfPwCZkgln6gYShQAAAAASUVORK5CYII=" alt="재생"/>
                                <h3> 웨딩플래너 <small>이성희 고수</small></h3>
                            </div>
                        </div>
                        <div class="clip-wrap">
                            <div class="clip-bg clip-bg-07">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA7ZcssPkF4jwCrFQS08mHeDcgFIwrG+SnalgH+rOjbAry1XeLWkY1RF0AAAFTSURBVDjLlZXZkoJADEXTNIssCgoICIKznf//xClrGNka0fOcSvqmkxuZ4B+TYK8cR+2D5OjLGufYY4QXn8VEZDlwyEId1XWkw+wAjhXJglBBuZMRuxLURaa4FthaZmgbLFdG3K7QiYEOrrdRPhtPixHtYQ85LYqTrHAqsKTnArmskkOvKFJ08oQKlfaFbXlK8Ff81KDlKTnNXUJMKxu0xCK+x0422OH5cuQgmxw4SkImE2xDSzMSCQhlAh9f7mJiCGQ/1wx8zl+t2YsiXQRCO53ZFCUOtSEQ1fkyUOOsBYI1CzSXRlX+tLRRDLTpQkxAaFBtaE/C93YfM5LlF9on4xe+PhQSU8oGJfHdSJytwdU455dWwcb6X65qY7mil9a14ecNAxgsJV/J11vKyKQq8/u43t62vV7RhpEOpA9rdt2HNacrZl8wopiYvel8NI3hfPwCZkgln6gYShQAAAAASUVORK5CYII=" alt="재생" />
                                <h3> 청소도우미 <small>이은혜 고수</small></h3>
                            </div>
                        </div>
                        <div class="clip-wrap double-width">
                            <div class="clip-bg clip-bg-09">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA7ZcssPkF4jwCrFQS08mHeDcgFIwrG+SnalgH+rOjbAry1XeLWkY1RF0AAAFTSURBVDjLlZXZkoJADEXTNIssCgoICIKznf//xClrGNka0fOcSvqmkxuZ4B+TYK8cR+2D5OjLGufYY4QXn8VEZDlwyEId1XWkw+wAjhXJglBBuZMRuxLURaa4FthaZmgbLFdG3K7QiYEOrrdRPhtPixHtYQ85LYqTrHAqsKTnArmskkOvKFJ08oQKlfaFbXlK8Ff81KDlKTnNXUJMKxu0xCK+x0422OH5cuQgmxw4SkImE2xDSzMSCQhlAh9f7mJiCGQ/1wx8zl+t2YsiXQRCO53ZFCUOtSEQ1fkyUOOsBYI1CzSXRlX+tLRRDLTpQkxAaFBtaE/C93YfM5LlF9on4xe+PhQSU8oGJfHdSJytwdU455dWwcb6X65qY7mil9a14ecNAxgsJV/J11vKyKQq8/u43t62vV7RhpEOpA9rdt2HNacrZl8wopiYvel8NI3hfPwCZkgln6gYShQAAAAASUVORK5CYII=" alt="재생"/>
                                <h3> 피아니스트 <small>윤다정 고수</small></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default ProSignup;
