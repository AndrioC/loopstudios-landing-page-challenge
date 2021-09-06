import React, { useMemo, useState } from 'react';
import { 
    Container,
    Wrapper,
    Header,
    WrapperCreations,
    WrapperContainer,
} from './styles';

import creations from '../../assets/data/creations'

interface CreationsProps{
    id: number;
    title: string;
    alt: string;
    image: string;
}

const Creations:React.FC = () => {

    const [creationsValue, setCreationsValue] = useState<CreationsProps[]>([]);

    useMemo(() => {
        setCreationsValue(creations);    
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
                    <button type="button">see all</button>
                </Header> 

                <WrapperCreations>
                    <ul>
                        {renderCreations()}
                    </ul>                    
                </WrapperCreations>


            </Wrapper>
        </Container>
    )
}

export default Creations