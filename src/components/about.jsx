function About(){
    return(
        <div className="row  d-flex justify-content-evenly portfolio--about main--content">
            <section className="name-section col-7">
                <h1 className="headline text-muted">Caroline Richert</h1>
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
            <img src="https://picsum.photos/300" className="portfolio--image"/>
        </div>
        

    )
}

export default About;