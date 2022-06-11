import styled from "styled-components";

export const StyledAside = styled.aside`
    min-width: ${props => props.mobile ? '100%' : '300px'};
    height: 100vh;
 
    position: relative;
    
  
    background-color: var(--black);
    border-right: 2px solid var(--white);

    display: flex;
    flex-direction: column;
    gap: 30px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        border: none;
        background-color: transparent;
        color: var(--blue);
        font-size: 35px;
        font-weight: bold;
    }

    h2 {
        padding-left: 20px;
        padding-top: 20px;

        color: var(--blue);
        
        align-self: flex-start;
        font-size: 24px;
        font-weight: bold;
    }

`