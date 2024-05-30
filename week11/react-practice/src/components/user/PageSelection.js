import React from 'react'
import styled from 'styled-components'
import { getPerPage } from '../../apis/userlist'

const PageSelection = ({curPage, setUserData, setCurPage}) => {
    const handleClick = async(page) => {
        const response = await getPerPage(0);
        //5명씩 보여주기
        const offset = 5;
        const start = (page-1) * offset;
        const end = page * offset;
        const slicedData = response.slice(start, end);
        
        setUserData(slicedData);
        setCurPage(page);
    }

  return (
    <SelectionLayout>{[1,2,3,4,5,6].map(
        (val) => 
        <PageBox
        key={val}
        $active={val === curPage ? true:false}
        onClick={() => handleClick(val)}>
            {val}
        </PageBox>
    )}</SelectionLayout>
  )
}

export default PageSelection

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: white;
    }
`