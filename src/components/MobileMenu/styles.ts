import styled from 'styled-components'

interface Props{
    openMenu: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavBar = styled.div<Props>`
    position: absolute;
    top: 0;
    background: #000;
    width: 100%;
    bottom: 0;
    z-index: 100;
    right: ${props => props.openMenu ? 0 : -100}%;
    transition: all 350ms ease-in-out;
    nav {
        ul {
            position: absolute;
            top: 222px;
            left: 24px;
            display: flex;
            flex-direction: column;
            font-size: 15px;
            color: var(--white);

            li {
                position: relative;
                list-style: none;
                font-family: "Josefin Sans";
                font-size: 36px;
                font-style: normal;
                font-weight: normal;
                cursor: pointer;
                & + li {
                    margin-top: 45px;
                }
                transition: opacity .3s;
                text-transform: uppercase;

                &:hover{
                    opacity: 0.7;
                }
            }
        }
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImgLogo = styled.img`
    position: absolute;
    left: 24px;
    top: 66px;
`;

export const CloseIcon = styled.img<Props>`
    top: 66px;
    position: absolute;
    right: 27px;
    cursor: pointer;

    transition: filter .3s;

    &:hover {
        filter: opacity(.3);
    }
`;

export const HamburgerIcon = styled.img<Props>`
    top: 68px;
    position: absolute;
    right: 25px;
    cursor: pointer;
    z-index: 100;    
    transition: filter .3s;

    &:hover {
        filter: opacity(.3);
    }
`;