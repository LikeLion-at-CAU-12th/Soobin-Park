import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import MutsaTest from './pages/MutsaTest';
import TestResult from './pages/TestResult';
import './App.css';

function App() {
  return (
    <div className="App">
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />}>
          {/* // path="/books/:id"로 해도 동일함 */}
          <Route path=":id" element={<BookDetail />} /> 
        </Route>
        <Route path="/mutsaTest" element={<MutsaTest />} />
        <Route path="/testResult" element={<TestResult />} />
      </Routes>
    </AppDom>
    </div>
  );
}

export default App;


const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;