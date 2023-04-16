import React from 'react'
import Data from './Data'
import gig from "../../Assets/Images/gig.png"

const Home = () => {

    return (
        <section className="home main-section" id="Home">
            <div className="home-container main-container main-grid">
                <div className="home-content main-grid">
                    <div className="home-content-1">
                        <Data />
                    </div>
                    <div className="home-content-2">
                        <img src={gig} className="gig" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home