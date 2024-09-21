import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getMyPage } from '../apis/user';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
    const [data, setData] = useState();
    const [lodading, setLoading] = useState(true);

    const router = useNavigate();

    useEffect(() => {
        getMyPage().then((data) => {
            setData(data);
            setLoading(false);
        }).catch((error) => {
            alert("Token is expired. Please login again.")
            router('/'); //토큰 만료 시 로그인 페이지로 이동
        });
    },[]);

    const onClick = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        router('/');
    }

    if (lodading) {
        return <div>Loading...</div>
    }

    return (
        <Wrapper>
            <Title>User Info</Title>
            <div>Name : {data.name}</div>
            <div>Age : {data.age}</div>
            <BtnWrapper>
                <button onClick={onClick}>Logout</button>
            </BtnWrapper>
        </Wrapper>
    )
}

export default Mypage

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const BtnWrapper = styled.div`
  /* height: 100%;
  width: 85%; */
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;