import Component from 'react';

class SectionRecommendService extends Component{
    render() {
        return (
            <section class="recommend-service">
                <div class="recommend-service-title">
                    <h2>숨고 인기 서비스</h2>
                </div>
                <ul class="recommend-service-list">
                    <li>
                        <img src=""></img>
                        <h3>영어 과외</h3>
                        <p>95,314명 고수 활동 중</p>
                    </li>
                    <li>
                        <img src=""></img>
                        <h3>퍼스널트레이닝(PT)</h3>
                        <p>20,267명 고수 활동 중</p>
                    </li>  
                    <li>
                        <img src=""></img>
                        <h3>도배장판 시공</h3>
                        <p>7,963명 고수 활동 중</p>
                    </li>
                    <li>
                        <img src=""></img>
                        <h3>욕실/화장실 리모델링</h3>
                        <p>17,536명 고수 활동 중</p>
                    </li>
                </ul>
            </section>
        );
    }
}

export default SectionRecommendService;