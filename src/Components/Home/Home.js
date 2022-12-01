import React from 'react'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {

    return (
        <section className="home section" id="Home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <div className="home-content-1">
                        <Data />
                    </div>
                    <div className="home-content-2">
                        <div className="home-img"></div>
                    </div>
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home