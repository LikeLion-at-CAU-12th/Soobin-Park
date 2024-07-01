import React from 'react'
import { useRecoilState } from 'recoil'
import { emailAtom, userNameAtom } from '../../recoil/atom';

const Form = ({type, inputType}) => {
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const [email, setEmail] = useRecoilState(emailAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === 'Name') {
            setUserName(value);
        }
        else if (inputType === 'Email') {
            setEmail(value);
        }
    }

    return (
    <>
        <div>{inputType}</div>
        <input type={type} onChange={onChange}/>
    </>
        )
    }

export default Form