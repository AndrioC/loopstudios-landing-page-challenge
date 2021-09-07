import React from 'react'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Creations from '../../components/Creations'
import CreationsMobile from '../../components/CreationsMobile'
import Footer from '../../components/Footer'

import {
    Container,
} from './styles'

const Home:React.FC = () => {
    return (
        <Container>
            <section>
                <Header />
            </section>

            <section>
                <Presentation />
            </section>

            <section>
                <div className="creations-desktop">
                    <Creations />
                </div>
                <div className="creations-mobile">
                    <CreationsMobile />
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </Container>
    )
}

export default Home