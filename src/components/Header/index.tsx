import React from 'react';
import { 
    Container,
    ImgLogo,
    DescriptionInfo,
} from './styles';

import logo from '../../assets/images/logo.svg'

import DesktopMenu from '../DesktopMenu'

const Header:React.FC = () => {
    return (
        <Container>
            <ImgLogo 
                src={logo}
                alt="logo"
            />
            
            <DesktopMenu 
                top={10}
                left={0}
                right={169}
                marginTop={0}
            />

            <DescriptionInfo>
                <h1>
                    immersive experiences that deliver
                </h1>
            </DescriptionInfo>
        </Container>
    )
}

export default Header