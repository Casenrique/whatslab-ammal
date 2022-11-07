import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px
`

export const UserContainer = styled.div`
    display:flex;
    align-items:center;
    /* flex-direction:  */
    
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 130px;
`

export const UserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

`
export const IconImage = styled.img`
    /* border-radius: 50%; */

`
export const HeaderButton = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;

`
export const UserSelect = styled.select`
    font-weight: bold;
    font-size: 16px;
    border: none;
    outline: none
`