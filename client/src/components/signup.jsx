import React, { Component } from 'react';
import '../components/css/common';
import '../components/css/signup';

function signup(){
    return(
        <div class="signup">
            <div class="signupTit">
                <h2>숨고에 오신 것을 환영합니다</h2>
            </div>
            <div class="signupBox">
                <div class="signupForm">
                    <p>이름</p>
                    <input class="textInput" type="text" placeholder="이름(실명)을 입력해주세요"></input>
                    <p>이메일</p>
                    <input class="textInput" type="text" placeholder="example@soomgo.com"></input>
                    <p>비밀번호</p>
                    <input class="textInput" type="password" placeholder="영문+숫자 조합 8자리 이상 입력해주세요"></input>

                    <div class="checkbox"><input type="checkbox"></input><label for="checkbox"></label><span class="txtAll"><span class="txt1">이용약관</span><span class="txt2">, </span><span class="txt1">개인정보 수집 및 이용</span><span class="txt2"> 동의 (필수)</span></span></div>
                    <div class="checkbox"><input type="checkbox"></input><label for="checkbox"></label><span class="txtAll"> <span class="txt2"> 만 14세 이상 (필수)</span></span></div>
          
          
                    <div class="selectBtn"><button class="select signupBtn">회원가입</button></div>
                    <div class="selectBtn"><button class="select signupFB"><img src="https://assets.cdn.soomgo.com/icons/icon-login-facebook-btn.svg">Facebook으로 가입하기</img></button></div>
          
        
                </div>  
        
                <div class="gotoPro">
                    <a href="#">고수로 가입하시나요?</a>
                </div>

        

            
            </div>

        </div>

    )
}


export default signup;