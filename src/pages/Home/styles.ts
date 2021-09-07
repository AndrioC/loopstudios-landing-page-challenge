import styled from 'styled-components'

export const Container = styled.div`

    .creations-desktop{
        display: block;
    }

    .creations-mobile{
        display: none;
    }

    @media(max-width: 900px){
        .creations-desktop{
            display: none;
        }

        .creations-mobile{
            display: block;
        }
    }
`;