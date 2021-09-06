import React from 'react';
import { 
    Container,
    ImgLogo,
    NavBar,
    DescriptionInfo,
} from './styles';

import logo from '../../assets/images/logo.svg'

const Header:React.FC = () => {
    return (
        <Container>
            <ImgLogo 
                src={logo}
                alt="logo"
            />

            <NavBar>
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

            <DescriptionInfo>
                <h1>
                    immersive experiences that deliver
                </h1>
            </DescriptionInfo>
        </Container>
    )
}

export default Header