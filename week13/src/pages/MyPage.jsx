import React from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { userNameAtom, emailAtom, isSubmittedAtom } from '../recoil/atom'
import { Button, Title, Wrapper } from '../components/layout/common';
import { useContext } from 'react';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();

    const resetUsername= useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetIsSubmitted = useResetRecoilState(isSubmittedAtom);


const handleReset = () => {
    resetUsername();
    resetEmail();   
    resetIsSubmitted();
    navigate('/');
}

    return (
        <Wrapper>
            <Title>Welcome {userName} ✋</Title>
            <Button mode={mode.button} onClick={handleReset}>Reset</Button>
        </Wrapper>
    )
}

export default MyPage