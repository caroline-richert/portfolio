import PortfolioImg from '../assets/IMG_7943.jpg'

import { ReactComponent as AboutMe } from '../articles/about.md'


function About(){
    return(
        <main className="main--content">
            <div className="portfolio--about">
            <section className="name-section">
                <h1 className="headline text-muted">Caroline Richert</h1>
                <h6 className="subheadline">From Physician to Front End</h6>
                <div className="name-about-section" role="alert">
                    <AboutMe />
                </div>
            </section>
            <img src={PortfolioImg} className="portfolio--image"/>
            </div>
        </main>
        

    )
}

export default About;