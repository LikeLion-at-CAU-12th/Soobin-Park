import React from 'react';
 import styled from 'styled-components';

 const OffsetOption = ({ onSelectChange, selectedValue }) => {

     const handleChange = (event) => {
         onSelectChange(event.target.value);
     };

     return (
         <OptionLayout>
             <OptionBox>
                 <StyledSelect value={selectedValue} onChange={handleChange}>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="10">10</option>
                     <option value="30">30</option>
                 </StyledSelect>
             </OptionBox>
         </OptionLayout>
     );
 };

 export default OffsetOption;

 const OptionLayout = styled.div`
     display: flex;
     align-items: center;
     width: 100%;
     gap: 2rem;
     justify-content: center;
 `;

 const OptionBox = styled.div`
     display: flex;
     padding-bottom: 2rem;
     border-radius: 1rem;
     font-size: 2.5rem;
 `;

 const StyledSelect = styled.select`
     font-size: 1.5rem;
     padding: 0.5rem 1rem;
     border: 2px solid #ccc;
     border-radius: 0.5rem;
     background-color: #fff;
     &:focus {
         outline: none;
         border-color: orange;
     }
 `;