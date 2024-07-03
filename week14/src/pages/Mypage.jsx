import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getMyPage } from '../apis/user';

const Mypage = () => {
    const [data, setData] = useState();
    const [lodading, setLoading] = useState(true);

    useEffect(() => {
        getMyPage().then((data) => {
            setData(data);
            setLoading(false);
        }).catch((error) => {
            alert("Token is expired. Please login again.")
        });
    },[]);

    if (lodading) {
        return <div>Loading...</div>
    }

    return (
        <Wrapper>
            <Title>User Info</Title>
            <div>Name : {data.name}</div>
            <div>Age : {data.age}</div>
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
