import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getResults } from '../apis/mutsaData';
import styled from 'styled-components';

const TestResult = () => {
  const [resultImg, setResultImg] = useState();
  const [resultTitle, setResultTitle] = useState();

  // useLocation() 훅을 사용하여 현재 URL에 대한 정보를 가져옴
  const location = useLocation();

  // 전달된 상태 객체를 가져옴
  const num = location.state.num;
  console.log("맞은 개수 : " + num);

  useEffect(() => {
    getResults(num)
            .then((data) => {
                setResultImg(data.resultImg);
                setResultTitle(data.resultTitle);
                console.log(data.resultTitle);
            })
            .catch((error) => {
                console.error("Error fetching results:", error);
            });
    }); //여기 num 해야할지...

  return (
    <div>
      <ResultContainer>
            <h1>당신은...</h1>
            {/* 결과 데이터가 있는지 확인 */}
            {resultTitle && resultTitle.length > 0 ? (
                // 결과 데이터가 있을 때 출력
                <div>
                    {/* 이미지 출력 */}
                    <img src={resultImg} alt="Test Result" />
                    {/* 제목 출력 */}
                    <ResultTitle>{resultTitle}</ResultTitle>
                </div>
            ) : (
                // 결과 데이터가 없을 때 메시지 출력
                <div>No resultTitle available</div>
            )}
      </ResultContainer>
    </div>
  )
}

export default TestResult

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 20px;
`;

const ResultImg = styled.img`
    width: 200px;
    height: 200px;
`;

const ResultTitle = styled.h2` 
    font-size: 30px;

    text-align: center;
`;