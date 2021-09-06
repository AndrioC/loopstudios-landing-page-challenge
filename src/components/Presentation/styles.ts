import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 160px;
    margin-bottom: 180px;
    width: 1114px;
`;


export const Info = styled.div`
    width: 558px;
    height: 318px;
    background: var(--white);
    margin-left: -159px;
    margin-top: 181px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: "Josefin Sans";
        text-transform: uppercase;
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        margin-left: 96px;
        line-height: 48px;
    }

    p {
        color: #000;
        margin-top: 24px;
        opacity: 0.5;
        font-family: "Alata";
        font-style: normal;
        font-size: 15px;
        width: 445px;
        margin-left: 96px;
        line-height: 27px;
    }

`;
