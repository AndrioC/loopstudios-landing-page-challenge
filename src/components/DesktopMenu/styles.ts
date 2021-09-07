import styled from 'styled-components'

interface Props{
    top: number;
    left: number;
    right: number;
    marginTop: number;
}

export const NavBar = styled.div<Props>`
    position: absolute;
    top: ${props => props.top > 0 ? props.top : "auto"}px;
    left: ${props => props.left > 0 ? props.left : "auto"}px;
    right: ${props => props.right}px;
    margin-top: ${props => props.marginTop}px;
    nav {
        ul {
            display: flex;
            list-style: none;
            font-family: "Alata";
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            color: var(--white);
                margin-top: 0;

            li {
                position: relative;
                cursor: pointer;
                & + li {
                    margin-left: 33px;
                    margin-top:0;
                }
                transition: opacity .3s;

                &:hover{
                    ::before{
                        content: "";
                        position: absolute;
                        width: 24px;
                        height: 2px;
                        top: 30px;
                        align-items: center;
                        background: var(--white);
                    }
                    opacity: 0.7;
                }
            }
        }
    }

    @media(max-width: 900px){
    left: 0px;
    right: 0px;
        nav {
            ul {
                flex-direction: column;
                align-items: center;
                margin-top: 33px;

                li {
                    position: relative;
                    cursor: pointer;
                    & + li {
                        margin-left: 0;
                        margin-top: 30px;
                    }
                    transition: opacity .3s;

                    &:hover{
                        ::before{
                            content: "";
                            position: absolute;
                            width: 24px;
                            height: 2px;
                            top: 30px;
                            align-items: center;
                            background: var(--white);
                        }
                        opacity: 0.7;
                    }
                }
            }
        }
    }
`;