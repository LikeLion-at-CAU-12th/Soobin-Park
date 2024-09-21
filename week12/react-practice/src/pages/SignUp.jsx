import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../apis/user'

const Signup = () => {
    const [id, setId] = useState()
    const [pw, setPassword] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()

    const onChangeId = (e) => {
        setId(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const router = useNavigate();

    const onClick = async () => {
        await signUp(id, pw, name, age);
        router('/')
    }

    return (
        <Wrapper>
            <Title>Sign Up</Title>
            <Inputs>
            <div>ID</div>
            <input value={id} onChange={onChangeId}/>
            <div>Password</div>
            <input value={pw} onChange={onChangePassword}/>
            <div>Name</div>
            <input value={name} onChange={onChangeName}/>
            <div>Age</div>
            <input value={age} onChange={onChangeAge}/>
            </Inputs>
            <button onClick={onClick}>Sign Up</button>
        </Wrapper>
    )
}

export default Signup

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  border: 3px solid #89cdf6;
  background: #fafffa;
  padding: 30px;
  button {
    background-color: skyblue;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: white;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #585858;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 4px;
  div {
    font-size: 14px;
    color: grey;
  }
  input {
    font-size: 20px;
    height: 20px;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 10px;
    margin-bottom: 1rem;
    &::placeholder {
      color: darkgray;
      font-size: 20px;
      font-weight: 500;
      font-family: "OTWelcomeRA";
    }
  }
`;
