import React from 'react'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Creations from '../../components/Creations'

const Home:React.FC = () => {
    return (
        <>
            <section>
                <Header />
            </section>

            <section>
                <Presentation />
            </section>

            <section>
                <Creations />
            </section>
        </>
    )
}

export default Home