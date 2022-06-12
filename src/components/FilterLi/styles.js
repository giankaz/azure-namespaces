import styled from "styled-components";

export const StyledLi = styled.li`
   width: 100%;
   height: 45px;
   padding: 15px 0px 15px 20px;


   text-align: start;

   color: ${props => props.color};
   border-bottom: 2px solid ${props => props.color ? props.color : 'var(--grey)'};
   transition: 0.5s;


    &:hover {
      color: var(--blue);
    border-bottom: 2px solid var(--blue);
    cursor: pointer;
    }
`