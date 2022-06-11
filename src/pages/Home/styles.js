import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    height: 100vh;
    
    display: flex;

    .menu_hamburguer {
        position: absolute;
        left: 10px;
        top: 10px;
        z-index: 2;
        cursor: pointer;

        &:hover {
            color: var(--blue);
        }
    }

    section {
    
        width: 100%;
        max-height: 100vh;

      
        padding-bottom: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        

        overflow-y: auto;
    }
`