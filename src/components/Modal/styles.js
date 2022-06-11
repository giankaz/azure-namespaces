import styled from "styled-components";

export const StyledInput = styled.input`
    width: 85.5%;
    background-color: transparent;
    border: none;
    color: var(--white);
    height: 100%;

    &::placeholder {
        color: var(--white);
    }
`
export const StyledDiv = styled.div`
    width: 94.5%;
    height: 56px;
    border: 1px solid var(--blue);
    border-radius: 6px;
    padding: 10px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;

    svg {
        color: var(--white);
    }
        &:hover svg {
            color: var(--blue);

            &:hover {
                color: var(--white);
            }
            
        }

        input {
        cursor: pointer;
        }
        input:focus {
            outline: none;
        }

        p {
        display: none;
        width: 140px;
        background-color: var(--black);
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 10;
        right: 0;
        bottom: -35px;
        border: 1px solid var(--blue);
        font-family: 'rubik', 'sans-serif';
}


&:hover p{
  display: flex;

}
`

export const StyledCloseButton = styled.button`
border: none;
background-color: transparent;
font-size: 30px;
font-weight: bold;
color: var(--blue);

position: absolute;
right: 10px;
top: 0;
cursor: pointer;

&:hover {
    color: red;
}
`

export const StyledForm = styled.form`
width: 97%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
`