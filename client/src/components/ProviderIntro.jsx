import Component from 'react';

class ProviderIntro extends Component{
    render() {
        return (
          <>
            <section class="provider-introduce">
            <div class="title">
              <h3>
                <strong>더 많은 고객을 만날 기회!</strong>
                <br>가입 직후 <strong>내 조건에 맞는 요청서</strong>를</br>
                <br>무료로 받아보고 만나고 싶은</br>
                <br>고객과 연락해보세요.</br>
              </h3>
              <button>고수로 가입하기</button>
            </div>
            <div class="slick">
              <div class="slick-arrows">
                <button class="prev">◀</button>
                <button class="next">▶</button>
              </div>
              <ul class="slick-list">
                <li>
                  <img src=""></img>
                  <h4>고객의 요청서가 도착해요</h4>
                  <p>
                    전문 활동 분야를 등록하면
                    <br>고객이 도움이 필요한 서비스에 대해</br>
                    <br>작성한 요청서가 도착해요.</br>
                  </p>
                </li>
              </ul>
            </div>
          </section>
          </>
        );
    }
}


export default ProviderIntro;