import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MutsaTest = () => {
    const [questions, setQuestions] = useState([]); // 문제들을 저장할 상태

    useEffect(() => {
        const fetchTest = async () => {
            console.log("fetch Questions");
            try {
                const response = await axios.get("https://gominzipsession.o-r.kr/liontest/question");
                // console.log("response:", response);
                // console.log("data:", response.data);
                // console.log("questions:", response.data.questions);
                setQuestions(response.data.questions);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchTest(); // 효과 함수 부분(마운트 시에 실행)
    }, []);

    console.log(questions);

    // 문제들을 화면에 출력
    return (
        <TestLayer>
            <Title>🦁 Mutsa Test 🦁</Title>
            {/* 문제를 불러오는 중 / 문제를 출력  -> 삼항 연산자*/}
            {questions.length === 0 ? (
                <div>문제를 불러오는 중입니다...</div>
            ) : (
                <QuestionsContainer>
                    {Object.values(questions).map((question, idx) => (
                        <div key={idx}>
                            <QuestionBox>
                                <h3>{question.question}</h3>
                                {question.choices.map((choice, index) => (
                                    <Choice key={index}>{choice}</Choice>
                                ))}
                            </QuestionBox>
                        </div>
                    ))}
                </QuestionsContainer>
            )}
        </TestLayer>
    );
};

export default MutsaTest;

const Title = styled.div`
    font-size: 40px;
    color: #535353;
    text-align: center;
    align-self: center;
    justify-self: center;
`;

const TestLayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 20px;
`;

const QuestionsContainer = styled.div`
    font-size: 18px;
    color: #535353;
    font-weight: 700;
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
