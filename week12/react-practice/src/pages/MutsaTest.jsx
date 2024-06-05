import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MutsaTest = () => {
    const [questions, setQuestions] = useState([]); // 문제들을 저장할 상태
    // 정답 배열의 길이를 문제 길이만큼 동적으로 생성!!!!!(5로 정적으로 하면 문제가 추가되면 오류 발생할 수 있어서)
    const [selectedChoices, setSelectedChoices] = useState(Array(questions.length).fill(null)); // 선택된 답변의 인덱스를 저장할 상태

    useEffect(() => {
        const fetchQuestions = async () => {
            console.log("fetch Questions");
            try {
                const response = await axios.get("https://gominzipsession.o-r.kr/liontest/question");
                // console.log("response:", response);
                // console.log("data:", response.data);
                // console.log("questions:", response.data.questions);
                setQuestions(response.data.questions);
                // // 선택된 답변 상태 초기화 -> 굳이 해야되나??
                // setSelectedChoices(Array(response.data.questions.length).fill(null));
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions(); // 효과 함수 부분(마운트 시에 실행)
    }, []);

    // 선택지 클릭 handler
    const handleChoiceClick = (questionIdx, choiceIdx) => {
        const updatedSelectedChoices = [...selectedChoices];
        updatedSelectedChoices[questionIdx] = choiceIdx;
        setSelectedChoices(updatedSelectedChoices);
    };

    console.log(questions);

    // 문제들을 화면에 출력
    return (
        <TestLayer>
            <Title>🦁 Mutsa Test 🦁</Title>
            {/* 문제를 불러오는 중 / 문제를 출력 */}
            {questions.length === 0 ? (
                <div>문제를 불러오는 중입니다...</div>
            ) : (
                <QuestionsContainer>
                    {Object.values(questions).map((question, questionIdx) => (
                        <div key={questionIdx}>
                            <QuestionBox>
                                <h3>{question.question}</h3>
                                {question.choices.map((choice, choiceIdx) => (
                                    <Choice
                                        key={choiceIdx}
                                        onClick={() => handleChoiceClick(questionIdx, choiceIdx)}
                                        selected={selectedChoices[questionIdx] === choiceIdx} //true/false를 담아줌->styled-components에서 사용
                                    >
                                        {choice}
                                    </Choice>
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
    color: ${({ selected }) => (selected ? '#1e1e1e' : '#4a4a4a')};
    background-color: ${({ selected }) => (selected ? '#9ecfff' : '#b8edfb')};
    border-radius: 20px;
    cursor: pointer;
    text-decoration: none;
    font-weight: ${({ selected }) => (selected ? 700 : 500)};
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