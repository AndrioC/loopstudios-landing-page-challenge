import React from 'react';
import { 
    Container,
    ImgLogo,
    DescriptionInfo,
} from './styles';

import logo from '../../assets/images/logo.svg'

import DesktopMenu from '../DesktopMenu'
import MobileMenu from '../MobileMenu'

const Header:React.FC = () => {
    return (
        <Container>
            <ImgLogo 
                src={logo}
                alt="logo"
            />
            
            <div className="desktop-menu">
                <DesktopMenu 
                    top={10}
                    left={0}
                    right={169}
                    marginTop={0}
                />
            </div>

            <div className="mobile-menu">
                <MobileMenu />
            </div>

            <DescriptionInfo>
                <h1>
                    immersive experiences that deliver
                </h1>
            </DescriptionInfo>
        </Container>
    )
}

export default Header