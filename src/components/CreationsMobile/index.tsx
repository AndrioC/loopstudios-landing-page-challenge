import React, { useMemo, useState } from 'react';
import { 
    Container,
    Wrapper,
    Header,
    WrapperCreations,
    WrapperContainer,
} from './styles';

import creationsMobile from '../../assets/data/creations-mobile'

interface CreationsProps{
    id: number;
    title: string;
    alt: string;
    image: string;
}

const CreationsMobile:React.FC = () => {

    const [creationsValue, setCreationsValue] = useState<CreationsProps[]>([]);

    useMemo(() => {
        setCreationsValue(creationsMobile);    
    }, [])

    function renderCreations(){
        return (
            creationsValue.map(creation => (
                <li key={creation.id}>
                    <WrapperContainer>
                        <img src={creation.image} alt={creation.alt}/>
                        <span>{creation.title}</span>
                    </WrapperContainer>
                </li>
            ))
        )
    }

    return (
        <Container>
            <Wrapper>
                <Header>
                    <h1>our creations</h1>
                </Header> 

                <WrapperCreations>
                    <ul>
                        {renderCreations()}
                    </ul>                    
                </WrapperCreations>


                <button type="button">see all</button>

            </Wrapper>
        </Container>
    )
}

export default CreationsMobile