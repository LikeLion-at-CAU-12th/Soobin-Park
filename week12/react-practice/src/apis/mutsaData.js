// api를 호출해 데이터를 받아오는 함수를 작성합니다.
import axios from "axios";

export const baseURL = "https://gominzipsession.o-r.kr";

export const getQuestions = async () => {
    console.log("getQuestions() 실행");
    const response = await axios.get(`${baseURL}/liontest/question`);
    return response.data;
}

export const postAnswers = async (answers) => { //매개변수로 답안을 받음
    console.log("postAnswers() 실행");
    const response = await axios.post(`${baseURL}/liontest/result`, { answers: answers });
    return response.data;
}

export const getResults = async (num) => { //매개변수로 맞힌 문제 개수를 받음
    console.log("getResults() 실행");
    const response = await axios.get(`${baseURL}/liontest/result/${num}`);
    return response.data;
}