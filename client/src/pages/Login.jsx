import React from 'react';
import '../assets/css/common.css';
import '../assets/css/login.css';
import icon_kakao from '../assets/images/icon_kakao.svg';
import icon_facebook from '../assets/images/icon_facebook.svg';

function Login(){
    return(
      <>
        <div className="_login">
          <div className="loginTit">
            <h2>로그인</h2>
          </div>
          <div className="loginBox">
            <div className="loginForm">
              <p>이메일</p>
              <input className="textInput" type="text" placeholder="example@soomgo.com"></input>
              <p>비밀번호</p>
              <input className="textInput" type="password" placeholder="비밀번호를 입력해주세요."></input>
              <a className="_findPwd" href="/FindPwd"><span className="findPwd-txt">비밀번호 찾기</span></a>
              <div className="selectBtn"><button className="select sel-email">이메일 로그인</button></div>
              <div className="selectBtn"><button className="select sel-kakao"><img src={icon_kakao} alt='icon_kakao' />Kakao로 시작하기</button></div>
              <div className="selectBtn"><button className="select sel-Facebook"><img src={icon_facebook} alt='icon_facebook' />Facebook으로 시작하기</button></div>
            </div>  
          
            <div className="gotoSignup">
              <a href="/Signup">계정이 없으신가요?</a>
              
            </div>
          </div>
  
      </div>
    </>
  
    )
}


export default Login;