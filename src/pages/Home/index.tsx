import React from 'react'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'

const Home:React.FC = () => {
    return (
        <>
            <section>
                <Header />
            </section>

            <section>
                <Presentation />
            </section>
        </>
    )
}

export default Home