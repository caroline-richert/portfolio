function About(){
    return(
        <div className="container-lg portfolio--main">
            <div className="row portfolio--about mt-4">
                <section className="name-section col-7">
                    <h1 className="headline">Caroline Richert</h1>
                    <h6 className="subheadline">From Physician to Front End</h6>
                    <div className="light mt-3" role="alert">
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    </div>
                </section>
                <img src="https://picsum.photos/300" className="portfolio--image col-5"/>
            </div>
            <div className="row">  
            </div>
        </div>
        

    )
}

export default About;