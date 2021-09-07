import React, { useState } from 'react'

import {
    Container,
    NavBar,
    Header,
    ImgLogo,
    CloseIcon,
    HamburgerIcon,
} from './styles'

import logo from '../../assets/images/logo.svg'
import closeIcon from '../../assets/images/icon-close.svg'
import hamburgerIcon from '../../assets/images/icon-hamburger.svg'

const MobileMenu:React.FC = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container>
            <HamburgerIcon 
                src={hamburgerIcon}
                alt="open"
                openMenu={openMenu}
                onClick={() => setOpenMenu(true)}
            /> 
            <NavBar openMenu={openMenu}>
                <Header>
                    <ImgLogo 
                        src={logo}
                        alt="logo"
                    />

                    <CloseIcon 
                        src={closeIcon}
                        alt="close"
                        openMenu={openMenu}
                        onClick={() => setOpenMenu(false)}
                    />      
                </Header>     
                <nav>
                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Events
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            Support
                        </li>
                    </ul>
                </nav>
            </NavBar>
        </Container>
    )
}

export default MobileMenu