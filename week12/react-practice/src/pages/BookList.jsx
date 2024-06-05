import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookList = () => {
const [books, setBooks] = useState([]);
const navigate = useNavigate();

const goToHome = () => {
  navigate("/"); // navigate 함수를 이용해 홈으로 이동 (경로가 "/"이면 홈으로 이동하는 것임)
}

useEffect(()=>{ 
    const fetchBooks = async () => {
        const response = await axios.get("/databases/books.json");
        setBooks(response.data);
    }
    fetchBooks(); // 효과 함수 부분
  },[])

  return (
    <MenuDom>
      <BookListDom>
      <button onClick={goToHome}>🏠</button>
      <Title>📚 Book List</Title>
      <ul>
        {books.map((book,idx)=>(
          <Link key={idx} to={`/books/${book.id}`}>
            <li>{book.title}</li>
          </Link>
        ))}
      </ul>
      </BookListDom>
      <BookDetailDom>      
        <Outlet />
      </BookDetailDom>

    </MenuDom>
  )
}

export default BookList

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const BookListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const BookDetailDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
`;