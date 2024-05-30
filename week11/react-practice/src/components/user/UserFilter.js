import React, {useState} from 'react'
import styled from 'styled-components'
import { filterType } from '../../constants/filterType'
import { getGenderUser, getPerPage, getPartUser } from '../../apis/userlist'

const UserFilter = ({setFilter, setUserData, setCurPage}) => {
    const [activeFilter, setActiveFilter] = useState(null); //suzzang code

    const handleClick = async(type, param) => {
        if(type === "all"){
            const response = await getPerPage(1); //전체의 초기상태
            //response값을 저장하기 위해서 새로운 상태(state)가 필요하다!
            //useState를 이용해서 이 값을 저장해주도록 합시다~~
            setUserData(response);
            setCurPage(1);
        } else if (type === "gender"){
            const response = await getGenderUser(param);
            setUserData(response);
            setCurPage(1);
        } else if (type === "part"){
            const response = await getPartUser(param);
            setUserData(response);
            setCurPage(1);
        }
        setFilter(param); //다른 값으로도 변경 가능~ 
        setActiveFilter(param); //suzzang code
    }
  return (
    <FilterLayout>{filterType.map(
        (data, idx) => 
        <FilterBox
        key={idx}
        $active={activeFilter === data.param} //suzzang code
        onClick={() => handleClick(data.type, data.param)}>{data.title}</FilterBox>
    )}</FilterLayout>
  )
}

export default UserFilter

const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    background-color: "#C9C9C9";
    border-radius: 1rem;
    font-size: 2.5rem;
    white-space: nowrap;
    font-weight: 600;
    &:hover{
        cursor: pointer;
        color: white;
    }
    //suzzang
    color: ${(props) => props.$active ? "orange" : "grey"};
`