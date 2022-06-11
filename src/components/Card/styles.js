import styled from "styled-components";

export const StyledLi = styled.li`
    width: 100%;
    height: 70px;
    padding: 20px;

    background: 'linear-gradient(to left bottom, #1e1e1e, #262627, #2e2e2f, #363639, #3e3e42) no-repeat center center fixed';
    

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
        color: var(--blue)
        
    }
`