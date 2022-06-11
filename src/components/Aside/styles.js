import styled from "styled-components";

export const StyledAside = styled.aside`
    min-width: 300px;
    height: 100vh;
 
  
    background-color: var(--black);
    border-right: 2px solid var(--white);

    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
        padding-left: 20px;
        padding-top: 20px;

        color: var(--blue);
        
        align-self: flex-start;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    }

`