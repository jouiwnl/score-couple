import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 50px;
    width: 100vw;
    padding: 20px;
    overflow-y: hidden;
    overflow-x: auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;

    a {
        margin-left: 30px;
    }

    ::-webkit-scrollbar
    {
        height: 0px;
        background-color: #F5F5F5;
    }
`

export const HeaderLine = styled.div`
    width: 100%;
    height: 1px;
    background: #979797;
    opacity: 0.5;
`

export const Logo = styled.div`
    margin-top: 10px;
    img {
        width: 250px;
    }
`

export const HeaderButton = styled.span`
    transition: all ease 0.2s;

    &:hover {
        opacity: 0.5;
    }
`