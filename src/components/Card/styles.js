import styled from "styled-components";

export const StyledLi = styled.li`
    width: 100%;
    height: 70px;
    padding: 20px;



    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: 0.5s;

    border: 1px solid var(--grey);
    border-radius: 8px;

    -webkit-box-shadow: 6px 4px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 6px 4px 5px 0px rgba(0,0,0,0.33);
    box-shadow: 6px 4px 5px 0px rgba(0,0,0,0.33);


    &:hover {

        border: 1px solid var(--blue);
        cursor: pointer;
        
    }
`