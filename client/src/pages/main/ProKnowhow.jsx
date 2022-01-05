import React from 'react';
import '../../assets/css/common.css';
import '../../assets/css/main.css';
import Knowhow1 from '../../assets/images/pro-knowhow-1.jpg';
import Knowhow2 from '../../assets/images/pro-knowhow-2.jpg';
import Knowhow3 from '../../assets/images/pro-knowhow-3.png';
import Knowhow4 from '../../assets/images/pro-knowhow-4.png';

function ProKnowhow() {
  return (
    <section className="pro-knowhow">
      <div className="title">
        <h2>고수의 노하우</h2>
        <p>전체보기</p>
      </div>
      <ul className="list">
        <li className="item">
          <img src={Knowhow1} />
          <h3>코로나19 백신맞기 전에 보험 대비하자</h3>
          <p>FM에셋 사과나무 팀장 조단기</p>
        </li>
        <li className="item">
          <img src={Knowhow2} />
          <h3>청소업체 선정 방법에 대한 팁</h3>
          <p>하우앤업</p>
        </li>  
        <li className="item">
          <img src={Knowhow3} />
          <h3>이제는 필수가 되어버린 입주방역</h3>
          <p>바로방역(바로 달려가는)</p>
        </li>
        <li className="item">
          <img src={Knowhow4} />
          <h3>세탁기 에어컨 분해 청소 꼭 해야할까?</h3>
          <p>플래그닥터</p>
        </li>
      </ul>
    </section>
  )
}

export default ProKnowhow;