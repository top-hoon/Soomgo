import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindPwd from './pages/FindPwd';
import Categories from './pages/Categories';
import SendRequest from './pages/SendRequest';
import SentRequest from './pages/SentRequest';
import QuoteList from './pages/QuoteList';
import ChatDetail from './pages/ChatDetail';
import Mypage from './pages/mypage/Mypage';
import AccountInfo from './pages/mypage/AccountInfo';
import MypageSettings from './pages/mypage/MypageSettings';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/FindPwd" component={FindPwd} />
        
        <Route exact path="/Categories" component={Categories} />
        <Route exact path="/SendRequest" component={SendRequest} />
        <Route exact path="/SentRequest" component={SentRequest} />
        <Route exact path="/SentRequest/Quotes" component={QuoteList} />
        <Route exact path="/Chat" component={ChatDetail} />
        <Route exact path="/Mypage" component={Mypage} />
        <Route exact path="/Mypage/Account-info" component={AccountInfo} />
        <Route exact path="/Mypage/Account-info/Settings" component={MypageSettings} />
      </Switch>
    </BrowserRouter>
  );
}
