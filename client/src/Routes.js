import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindPwd from './pages/FindPwd';
import ProSignup from "./pages/ProSignup";
import Categories from './pages/Categories';
import SendRequest from './pages/SendRequest';
import SentRequest from './pages/SentRequest';
import QuoteList from './pages/QuoteList';
// import ChatDetail from './pages/ChatDetail';
import Mypage from './pages/mypage/Mypage';
import AccountInfo from './pages/mypage/AccountInfo';
import ProSearch from './pages/ProSearch';
import MypageSettingName from "./pages/mypage/MypageSettingName";
import MypageSettingPwd from "./pages/mypage/MypageSettingPwd";
import MypageSettingEmail from "./pages/mypage/MypageSettingEmail";
import MypageSettingPhone from "./pages/mypage/MypageSettingPhone";
import Chatroom from "./pages/Chatroom";
import ProService from './pages/proService/ProService';
import ProAddress from './pages/proService/ProAddress';
import Geolocation from './pages/proService/Geolocation';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/FindPwd" component={FindPwd} />
        <Route exact path="/ProSignup" component={ProSignup} />
        <Route exact path="/ProSearch" component={ProSearch} />
        <Route exact path="/Categories" component={Categories} />
        <Route exact path="/SendRequest" component={SendRequest} />
        <Route exact path="/SentRequest" component={SentRequest} />
        
        {/* 마이페이지 */}
        <Route exact path="/MypageSettingName" component={MypageSettingName} />
        <Route exact path="/MypageSettingEmail" component={MypageSettingEmail} />
        <Route exact path="/MypageSettingPwd" component={MypageSettingPwd} />
        <Route exact path="/MypageSettingPhone" component={MypageSettingPhone} />

        <Route exact path="/SentRequest/Quotes" component={QuoteList} />
        {/* <Route exact path="/Chat" component={ChatDetail} /> */}
        <Route exact path="/Mypage" component={Mypage} />
        <Route exact path="/Mypage/Account-info" component={AccountInfo} />
        <Route exact path="/Chatroom" component={Chatroom} />
        <Route exact path="/ProService" component={ProService} />
        <Route exact path="/ProAddress" component={ProAddress} />
        <Route exact path="/Geolocation" component={Geolocation} />
      </Switch>
    </BrowserRouter>
  );
}
