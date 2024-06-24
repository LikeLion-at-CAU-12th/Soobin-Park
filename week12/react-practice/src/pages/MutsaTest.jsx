import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestions, postAnswers } from '../apis/mutsaData';
import { useNavigate } from 'react-router-dom';

const MutsaTest = () => {
    const [questions, setQuestions] = useState([]); // 문제들을 저장할 상태
    // 정답 배열의 길이를 문제 길이만큼 동적으로 생성!!!!!(5로 정적으로 하면 문제가 추가되면 오류 발생할 수 있어서)
    const [selectedChoices, setSelectedChoices] = useState(Array(questions.length).fill(null)); // 선택된 답변의 인덱스를 저장할 상태
    const navigate = useNavigate();

    useEffect(() => {
        getQuestions().then((data) => {
            setQuestions(data.questions);
            setSelectedChoices(Array(data.questions.length).fill(null));
            console.log("selected: ");
            console.log(selectedChoices); //이때 왜 배열 길이 0이지... 5 예상했는데..
        });
    }, []);

    // 선택지 클릭 handler
    const handleChoiceClick = (questionIdx, choiceIdx) => {
        const updatedChoices = [...selectedChoices]; // 선택된 답변 상태 복사!!! 직접 수정하지 않기 위해서(불변성 유지)
        updatedChoices[questionIdx] = choiceIdx; // 선택된 답변 상태 업데이트
        setSelectedChoices(updatedChoices); //최종으로 업데이트된 선택된 답변 상태를 저장!! state.

        console.log(`질문 ${questionIdx + 1}의 선택지: ${choiceIdx + 1}`);
    };

    
    // 선택된 답변들을 서버로 전송
    const sendAnswers = () => {
        //전송하기 전에 1부터 시작하는 답변 번호로 변환
        const plusedChoices = selectedChoices.map((choice) => choice + 1);
        let num;
        postAnswers(plusedChoices).then((response) => {
            console.log("맞은 개수 : ", response.correctCount);
            num = response.correctCount;
        })
        .then(() => {
            console.log("답변 전송 완료");
            // 결과 페이지로 이동
            navigate('/testResult', {state: { num : num}});
        });
    };

    // 선택되지 않은 답변이 있는지 확인 후, 함수 호출
const handleSubmission = () => {
    // 선택되지 않은 문제가 있을 경우 예외 처리
    console.log(selectedChoices);
    if (selectedChoices.some(choice => choice === null)) {
        console.log("모든 질문에 대한 답변을 선택해주세요.");
        alert("모든 문제에 대한 답변을 선택해주세요.");
    } else {
        // 모든 질문에 대한 답변이 선택되었을 경우, 선택된 답변을 서버에 전송
        sendAnswers();
    }
};

const goToHome = () => {
    navigate("/");
}

    // 문제들을 화면에 출력
    return (
        <TestLayer>
            <GoHomeBtn onClick={goToHome}>뒤로가기</GoHomeBtn>
            <Title>🦁 Mutsa Test 🦁</Title>
            {/* 문제를 불러오는 중 / 문제를 출력 */}
            {questions.length === 0 ? (
                // 문제를 불러오는 중
                <div>문제를 불러오는 중입니다...</div>
            ) : (
                // 문제를 출력
                <QuestionsContainer>
                    {Object.values(questions).map((question, questionIdx) => (
                            <QuestionBox key={questionIdx}>
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
                    ))}
                </QuestionsContainer>
            )}
            <SubmitBtn onClick={handleSubmission}>답변 제출</SubmitBtn>
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
    width: 100%;
    margin: 10px;
`;

const QuestionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
    /* width: 100%; */
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

const GoHomeBtn = styled.button`
    font-size: 12px;
    color: #535353;
    background-color:#cfcfcf;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    margin: 20px;
    padding: 5px;
    width: 70px;
    border: none;
    margin-right: auto;

    &:hover {
        background-color: #7d7d7d;
        color: white;
    }
    &:active {
        background-color: #5b5b5b;
        color: white;
    }
`;

const SubmitBtn = styled.button`
    font-size: 20px;
    font-weight: 700;
    color: #535353;
    background-color:#cfcfcf;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    margin: 20px;
    padding: 10px;
    width: 100px;
    border: none;

    &:hover {
        background-color: #7d7d7d;
        color: white;
    }
    &:active {
        background-color: #5b5b5b;
        color: white;
    }
`;