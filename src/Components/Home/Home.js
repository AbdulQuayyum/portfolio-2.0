import React, { useEffect, useState } from 'react'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'

const Home = () => {

    return (
        <section className="home section" id="Home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social />
                    <div className="home-img"></div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home