import React, { useEffect, useState } from 'react';
import GuestNav from './nav/GuestNav';
import UserNav from './nav/UserNav';
import ProNav from './nav/ProNav';
import '../assets/css/nav.css';

function Nav() {
  const[isLogin, setIsLogin] = useState(true)
  const[isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    checkLogin()
  }, [])

  const checkLogin = () =>{
    const user = JSON.parse(localStorage.getItem('Soomgo'))
    if(user) {
      setIsLogin(true)
      setIsLoading(false)
    }else {
      setIsLogin(false)
      setIsLoading(false)
    }
  }
  return (
    <div className="state-nav">
      {isLogin ? <UserNav/>:<GuestNav/>}
    </div>
  )
}

export default Nav;