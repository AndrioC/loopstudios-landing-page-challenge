import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 1114px;
`;



export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 81px;

    h1 {
        text-transform: uppercase;
        font-family: "Josefin Sans";
        font-weight: 300;
        font-style: normal;
    }

    button {
        background: var(--white);
        font-family: "Alata";
        text-transform: uppercase;
        width: 159px;
        height: 42px;
        font-size: 15px;
        line-height: 15px;
        letter-spacing: 5px;
        transition: ease-in-out .3s;
        margin-right: 21px;

        &:hover{
            background: #000;
            color: var(--white);
            border: none;
        }
    }
`;

export const WrapperCreations = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    ul {
        align-items: center;
        li {
            margin-right: 22px;
            margin-bottom: 30px;
            display: inline-block;
        }
    }
`;

export const WrapperContainer = styled.div`
    position: relative;
    cursor: pointer; 

    span {
        position: absolute;
        left: 40px;
        top: 356px;
        font-size: 30px;
        font-family: "Josefin Sans";
        text-transform: uppercase;
        font-weight: 300;
        width: 139px;
        color: var(--white);
    }

    &:hover{
        img {
            z-index: 1;
            filter: opacity(0.36);
        }

        span {
            z-index: 100;
            color: #000;
        }
    }
`;