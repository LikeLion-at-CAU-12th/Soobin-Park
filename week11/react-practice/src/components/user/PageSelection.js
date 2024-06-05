import React, { useState, useEffect } from 'react';
 import styled from 'styled-components';
 import { getPerPage } from '../../apis/userlist';
 import OffsetOption from '../OffsetOption';

 const PageSelection = ({ curPage, setUserData, setCurPage }) => {
     const [totalPages, setTotalPages] = useState(0);
     const [offset, setOffset] = useState(5);
     const [allData, setAllData] = useState([]); // 전체 데이터를 저장할 상태

     useEffect(() => {
         const fetchData = async () => {
             const response = await getPerPage(0); // 전체 데이터 가져오기
             setAllData(response); // 전체 데이터 저장
             setTotalPages((response.length / offset)); // 총 페이지 수 계산
             handleClick(1, response);
         };
         fetchData();
     }, [offset]);

     const handleClick = async (page, data = null) => {
         const response = data || allData;
         const start = (page - 1) * offset;
         const end = page * offset;
         const slicedData = response.slice(start, end);

         setUserData(slicedData);
         setCurPage(page);
     };

     const handleOffsetChange = (newOffset) => {
         setOffset(parseInt(newOffset, 10));
     };

     return (
         <div>
             <OffsetOption onSelectChange={handleOffsetChange} selectedValue={offset} />
             <SelectionLayout>
                 {[...Array(totalPages)].map((_, idx) => (
                     <PageBox
                         key={idx}
                         $active={idx + 1 === curPage}
                         onClick={() => handleClick(idx + 1)}
                     >
                         {idx + 1}
                     </PageBox>
                 ))}
             </SelectionLayout>
         </div>
     );
 };

 export default PageSelection;

 const SelectionLayout = styled.div`
     display: flex;
     gap: 3rem;
     margin-bottom: 2rem;
 `;

 const PageBox = styled.div`
     font-size: 2rem;
     color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
     &:hover {
         cursor: pointer;
         color: white;
     }
 `;