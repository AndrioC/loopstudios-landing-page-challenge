import styled from 'styled-components'

import backgroundHero from '../../assets/images/desktop/image-hero.jpg'

export const Container = styled.header`
    height: 650px;
    background: url(${backgroundHero}) no-repeat;
    background-position: center 0%;
    background-size: cover;
    .mobile-menu{
        display: none;
    }

    .desktop-menu{
        display: block;
    }

    @media(max-width: 900px){
        .mobile-menu{
            display: block;
        }

        .desktop-menu{
            display: none;
        }
    }
`;

export const ImgLogo = styled.img`
    margin-top: 66px;
    margin-left: 165px;

    @media(max-width: 900px){
        margin-top: 66px;
        margin-left: 24px;    
    }
`;

export const NavBar = styled.div`
    position: absolute;
    right: 165px;
    top: 69px;
    nav {
        ul {
            display: flex;
            list-style: none;
            font-family: "Alata";
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            color: var(--white);

            li {
                position: relative;
                cursor: pointer;
                & + li {
                    margin-left: 33px;
                }
                transition: opacity .3s;

                &:hover{
                    ::before{
                        content: "";
                        position: absolute;
                        width: 24px;
                        height: 2px;
                        top: 30px;
                        left: calc(50% - 12px);
                        align-items: center;
                        background: var(--white);
                    }
                    opacity: 0.7;
                }
            }
        }
    }
`;

export const DescriptionInfo = styled.div`
    width: 650px;
    border: 2px solid var(--white);
    margin-top: 120px;
    margin-left: 165px;
    h1 {
        font-family: "Josefin Sans";
        font-weight: 300;
        color: var(--white);
        width: 570px;
        font-size: 72px;
        text-transform: uppercase;
        padding: 40px 20px 20px 30px;
    }

    @media(max-width: 900px){
        position: absolute;
        width: 333px;
        height: 198px;
        margin-left: 24px;

        h1{
            font-size: 40px;
            width: 279px;
            padding: 20px 20px 20px 30px;
        }
    }
`;