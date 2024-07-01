import React, { useContext } from 'react'
import { Button, Wrapper } from '../layout/common'
import Form from './Form'
import { ThemeColorContext, ModalContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isSubmittedAtom } from '../../recoil/atom';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const setIsSubmitted = useSetRecoilState(isSubmittedAtom); 
    const [isModalOpened, setModalOpened] = useContext(ModalContext);

    const handleBtn = () => {
        setModalOpened('block');
    }

    return (
        <Wrapper>
            <Form type='text' inputType='Name'/>
            <Form type='email' inputType='Email'/>
            <Button mode={mode.button} onClick={handleBtn}>Submit</Button>
        </Wrapper>
    )
}

export default FormSection;
