import styled from 'styled-components'

export const Container = styled.footer`
    width: 100%;
    background: #000;

    @media(max-width: 900px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    height: 168px;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 900px){
        height: 470px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 57px;
    }
`;

export const Header = styled.div`
    display: flex;

    @media(max-width: 900px){
        margin-top: 57px;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100%;
    }
`;

export const ImgLogo = styled.img`
    margin-left: 165px;

    @media(max-width: 900px){
        margin-left: 0;
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 48px;

    span {
        position: relative;
        margin-left: 18px;
        &:hover{
            ::after{
                content: "";
                display: block;
                position: absolute;
                width: 24px;
                right: 1px;
                height: 2px;
                top: 36px;
                left: calc(50% - 12px);
                background: var(--white);
            }
        }

        img {
            cursor: pointer;  
            width: 24px;
            height: 24px;
        }
    }

    @media(max-width: 900px){
        margin-left: 0;
    }
`;


export const FooterWrapper = styled.div`
    display: flex;
    margin-right: 165px;
    flex-direction: column;

    @media(max-width: 900px){
        margin-right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-direction: center;
    }
`;


export const RightsInfo = styled.div`
    display: flex;
    margin-right: 45px;

    span {
        font-family: "Alata";
        font-style: normal;
        font-size: 15px;
        color: var(--white);
        opacity: 0.5;
        margin-top: 12px;
    }

    @media(max-width: 900px){
        margin-right: 0;
    }
`;

