import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../apis/user';
import { useState } from 'react';
import { useEffect } from 'react';
import Login from './Login';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  const router = useNavigate();
  const booksClick = () => {
    router('/books');
  }

  //로그인 된 상태여야 mutsaTest 페이지로 이동 가능
  const mutsaClick = () => {
    if(!localStorage.getItem('access')){
      alert("Only accessed user can take the test. Please login first.");
    }
    else{
      router('/mutsaTest');
    }
  }

  const loginClick = () => {
    router('/login');
  }

  const logoutClick = () => {
    if(window.confirm("Are you sure you want to logout?")){
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      setIsLogin(false);
      router('/');
    }

  }

  //로그인 된 상태 바꿔주기
  useEffect(() => {
    if(localStorage.getItem('access')){
      setIsLogin(true);
      console.log("로그인 됨");
    }
  }
  ,[]);

  return (
    <MenuDom>
      <Title>🪼 Week12 Session 🫧</Title>
      <StyledButton onClick={booksClick}>
        📚 Book List
      </StyledButton>
      <StyledButton onClick={mutsaClick}>
        🦁 Mutsa Test
      </StyledButton>
      <LoginButton isLogin={isLogin} onClick={loginClick}>Login</LoginButton>
      <LogoutButton isLogin={isLogin} onClick={logoutClick}>Logout</LogoutButton>
    </MenuDom>
  )
}

export default Home


const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const LoginButton = styled.button`
  //로그인 된 상태일 때 보여지는 버튼
  display: ${(props) => props.isLogin ? 'none' : 'block'}; //로그인 된 상태일 때는 안보이게
`;

const LogoutButton = styled.button`
  //로그인 안된 상태일 때 보여지는 버튼
  display: ${(props) => props.isLogin ? 'block' : 'none'}; //로그인 안된 상태일 때는 안보이게
`;