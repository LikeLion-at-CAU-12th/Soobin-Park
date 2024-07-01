import React from 'react'
import styled from 'styled-components'
import { getQuestions } from '../apis/mutsaData'

const Question = () => {
  return (
    <div>Question</div>
  )
}

export default Question

const QuestionsContainer = styled.div`
    font-size: 18px;
    color: #535353;
    font-
    weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const QuestionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin: 20px;
`;

const Choice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4a4a4a;
    background-color: #b8edfb;
    border-radius: 20px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    margin-bottom: 2px;
    padding: 10px;
    width: 80%;

    &:hover {
        background-color: #9ecfff;
    }
    &:active {
        background-color: #3d9dfd;
    }
`;
