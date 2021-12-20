import Component from 'react';

class SectionRecommendPro extends Component{
    render() {
        return (
            <>
            <section class="recommend-pro">
                <div class="recommend-pro-title">
                    <h2>우리 지역의 숨은 고수</h2>
                    <p>전체보기</p>
                </div>
                <ul class="recommend-pro-list">
                    <li>
                        <img class="pro-banner" src=""></img>
                        <img class="pro-profile" src=""></img>
                        <div class="pro-info">
                        <p class="intro">저희 그린f5는 친환경 제품을 사용한 어쩌구 저쩌구</p>
                        <p class="location">경기 의왕시</p>
                        <p class="review-hire">
                        <span class="review">5.0<span class="count">(12개)</span></span>
                        <span class="hire">12회 고용</span>
                        </p>
                        </div>
                    </li>
                    <li>
                        <img class="pro-banner" src=""></img>
                        <img class="pro-profile" src=""></img>
                        <div class="pro-info">
                            <p class="intro">최병철 고수의 샷시 설치 및 수리! 외풍차단 어쩌구 저쩌구</p>
                            <p class="location">대전 서구</p>
                            <p class="review-hire">
                                <span class="review">5.0<span class="count">(4개)</span></span>
                                <span class="hire">10회 고용</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <img class="pro-banner" src=""></img>
                        <img class="pro-profile" src=""></img>
                        <div class="pro-info">
                            <p class="intro">깨끗하게 청소 해드리겠습니다. 연락주세요. 어쩌고 저쩌고</p>
                            <p class="location">경기도 부천시</p>
                            <p class="review-hire">
                                <span class="review">5.0<span class="count">(5개)</span></span>
                                <span class="hire">15회 고용</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <img class="pro-banner" src=""></img>
                        <img class="pro-profile" src=""></img>
                        <div class="pro-info">
                            <p class="intro">깨끗하게 청소 해드리겠습니다. 연락주세요. 어쩌고 저쩌고</p>
                            <p class="location">경기도 부천시</p>
                            <p class="review-hire">
                                <span class="review">5.0<span class="count">(5개)</span></span>
                                <span class="hire">15회 고용</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            </>     
        );
    }
}

export default SectionRecommendPro;