import React, { useContext, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Button } from './common';
import { ThemeColorContext, ModalContext } from '../../context/context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userNameAtom, emailAtom, isSubmittedAtom, themeAtom } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const context = useContext(ThemeColorContext);
  const [mode, setMode] = useState(context.blueTheme);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const [isSubmitted, setIsSubmitted] = useRecoilState(isSubmittedAtom);
  const [theme, setTheme] = useRecoilState(themeAtom);
  const navigate = useNavigate();
  const [isModalOpened, setModalOpened] = useState('none')

  const handleMode = (e) => {
    const value = e.target.value;
    if (value === 'blue') setMode(context.blueTheme);
    else if (value === 'green') setMode(context.greenTheme);
    else if (value === 'pink') setMode(context.pinkTheme);
  };

  const handleTheme = (e) => {
    const value = e.target.value;
    if (value === 'normal') 
      setTheme('');
    else if (value === 'serious')
      setTheme('Nanum Myeongjo, serif');
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setModalOpened('none');
    navigate('/mypage');
  }

  const handleCancel = () => {
    setModalOpened('none');
  }

  return (
    <ModalContext.Provider value={[isModalOpened, setModalOpened]}>
      <ThemeColorContext.Provider value={mode}>
        <GlobalStyle theme={theme} />
        <Wrapper>
          <Header mode={mode.main}>
            <Button value='blue' onClick={handleMode}>blue</Button>
            <Button value='green' onClick={handleMode}>green</Button>
            <Button value='pink' onClick={handleMode}>pink</Button>
          </Header>
          <Modal isModalOpened={isModalOpened}>
            <ModalContent>
              <ModalHeader>
                <h2>입력하신 정보를 확인하세요.</h2>
              </ModalHeader>
              <ModalBody>
                <h3>이름: {userName}</h3>
                <h3>이메일: {email}</h3>
              </ModalBody>
              <ModalFooter>
                <Button value='submit' onClick={handleSubmit}>확인</Button>
                <Button value='cancel' onClick={handleCancel}>취소</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <div>{children}</div>
          <Button value='normal' onClick={handleTheme}>normal</Button>
          <Button value='serious' onClick={handleTheme}>serious</Button>
          <Footer mode={mode.main}>
            {isSubmitted ? `${userName}'s space | ${email}` : '2024 LikeLion FE'}
          </Footer>
        </Wrapper>
      </ThemeColorContext.Provider>
    </ModalContext.Provider>
  );
};

export default Layout;

const Modal = styled.div`
  display: ${(props) => props.isModalOpened};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div` 
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  width:500px;
  height: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalHeader = styled.div` 
  display: flex;
  justify-content: space-between;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap');

  body {
    font-family: ${(props) => props.theme};
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;
