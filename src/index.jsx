import PortfolioImg from './assets/IMG_7943.jpg'

function Index(){
    return(
        <div className="index-page main--content">
            <h1 className="text-muted">Hi, I am Caro. A Front End Developer based in Germany.</h1>
            <img src={PortfolioImg} className="portfolio--image"/>
        </div>
    )
}

export default Index;