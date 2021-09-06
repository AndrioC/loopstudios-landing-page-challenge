import styled from 'styled-components'

export const Container = styled.footer`
    width: 100%;
    background: #000;
`;

export const Wrapper = styled.div`
    display: flex;
    height: 168px;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
`;

export const ImgLogo = styled.img`
    margin-left: 165px;
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
`;


export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 165px;
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
`;

