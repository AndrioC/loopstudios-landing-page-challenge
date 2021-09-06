import React from 'react'

import {
    Container,
    Wrapper,
    Info,
} from './styles'

import interativeImage from '../../assets/images/desktop/image-interactive.jpg'

const Presentation:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <img src={interativeImage} alt="interative"/>
                <Info>
                    <h1>the leader in interactive vr</h1>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class
                        virtual reality projects for some of the best companies around the
                        globe. Our award-winning creations have transformed
                        businesses through digital experiences that bind to their brand.
                    </p>
                </Info>
            </Wrapper>    
        </Container>
    )
}

export default Presentation