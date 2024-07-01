import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const BookDetail = () => {
    const params = useParams();
    const id = params.id;
    const [books, setBooks] = useState([]);
    const [likes, setLikes] = useState(1);

    const updateLikes = () => {
        setLikes(likes + 1);
    }
    
    useEffect(()=>{ 
    const fetchBooks = async () => {
        const response = await axios.get("/databases/books.json");
        setBooks(response.data);
    }
    fetchBooks(); // 효과 함수 부분(마운트 시에만 실행되도록 []로 설정)
    },[])

    // id가 변경될 때마다 likes를 0으로 초기화
    useEffect(()=>{
        setLikes(0);
    },[id]) //id가 변경될 때 실행!! -> 다른 거 누를 때마다 해당 useEffect가 실행돼서 좋아요 수가 초기화되도록 함

    const book = books.find((b)=>b.id === parseInt(id));

    if(!book) 
        return <div>책 정보가 없습니다.</div>

return (
    <div>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        {/* // 리렌더링 되지 않으면 좋아요 수가 업데이트 되지 않는 것에 주의 */}
        <Button onClick={updateLikes}>
            <Icon>👍🏿</Icon>
            {likes}
        </Button>
    </div>
)
}

export default BookDetail

const Button = styled.button`
    background-color: #75b5f5;
    color: #ffffff;
    border: none;
    border-radius: 25px;
    padding: 5px 15px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

&:hover {
    background-color: #9ecfff;
}

&:active {
    background-color: #3d9dfd;
}
`;

const Icon = styled.span`
    margin-right: 8px;
    font-size: 20px;
`;
