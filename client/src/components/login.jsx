import React, { Component } from 'react';
import '../components/css/common';
import '../components/css/login';


function login(){
    return(
        <div class="login">
        <div class="loginTit">
          <h2>로그인</h2>
        </div>
        <div class="loginBox">
          <div class="loginForm">
            <p>이메일</p>
            <input class="textInput" type="text" placeholder="example@soomgo.com"></input>
            <p>비밀번호</p>
            <input class="textInput" type="password" placeholder="비밀번호를 입력해주세요."></input>
            <div class="findPwd"><a href="#">비밀번호 찾기</a></div>
            
            
            <div class="selectBtn"><button class="select sel-email">이메일 로그인</button></div>
            <div class="selectBtn"><button class="select sel-kakao"><img src="https://assets.cdn.soomgo.com/icons/icon-login-kakaotalk-btn.svg">Kakao로 시작하기</img></button></div>
            <div class="selectBtn"><button class="select sel-Facebook"><img src="https://assets.cdn.soomgo.com/icons/icon-login-facebook-btn.svg">Facebook으로 시작하기</img></button></div>
            
          
          </div>  
          
          <div class="gotoSignup">
            <a href="#">계정이 없으신가요?</a>
          </div>
  
          
  
              
        </div>
  
      </div>
  
    )
}


export default login;