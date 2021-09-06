import React from 'react';
import { 
    Container,
    Wrapper,
    Header,
    ImgLogo,
    SocialNetworks,
    FooterWrapper,
    RightsInfo,
} from './styles';

import logo from '../../assets/images/logo.svg'
import DesktopMenu from "../DesktopMenu";

import iconFacebook from '../../assets/images/icon-facebook.svg'
import iconTwitter from '../../assets/images/icon-twitter.svg'
import iconPinterest from '../../assets/images/icon-pinterest.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'

const Footer:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Header>
                    <ImgLogo 
                        src={logo}
                        alt="logo"
                    />
                    <DesktopMenu            
                        top={0}
                        left={165}
                        right={0}
                        marginTop={36}
                    />
                </Header>

                <FooterWrapper>

                    <SocialNetworks>
                        <span>
                            <img src={iconFacebook} alt="facebook"/>
                        </span>
                        <span>
                            <img src={iconTwitter} alt="twitter"/>
                        </span>
                        <span>
                            <img src={iconPinterest} alt="pinterest"/>
                        </span>
                        <span>
                            <img src={iconInstagram} alt="instagram"/>
                        </span>
                    </SocialNetworks>

                    <RightsInfo>
                        <span>© {new Date().getFullYear()} Loopstudios. All rights reserved.</span>   
                    </RightsInfo>
                </FooterWrapper>
            </Wrapper>
        </Container>
    )
}

export default Footer