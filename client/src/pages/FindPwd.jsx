import React from 'react';
import '../assets/css/common.css';
import '../assets/css/findPwd.css';

function FindPwd() {
  return (
    <div class="findPwd">
      <div class="findPwdTit">
        <h2>비밀번호 찾기</h2>
      </div>
      <div class="findPwdBox">
        <div class="findPwdForm">
          <p>가입한 이메일 주소를 입력해주세요</p>
          <input class="textInput" type="text" placeholder="example@soomgo.com"></input>
          <span class="Infomsg">가입하신 이메일 주소를 입력해 주시면<br />
            새로운 비밀번호를 설정 가능한 링크를 보내드립니다.</span>
          <div class="selectBtn"><button class="select sendEmail">이메일 전송하기</button></div>
        </div>
      </div>
    </div>
  )
}

export default FindPwd;