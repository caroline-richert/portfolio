
function Projects(){
    return(
        <div className="main--projects main--content">
            <h3 className="text-muted mb-3">Recent Projects</h3>
            <section className="section--projects row justify-content-evenly">
                <div className="card col-6 card-custom-size">
                    <img    className="card-img-top card-img-sizes"
                            src="https://picsum.photos/150"
                            alt="Project preview" />
                    <h5 className="card-title ms-1">Project title</h5>
                    <p className="card-text ms-1"> Lorem ipsum ...</p>
                    <a href="#" className="btn btn-light" target="_blank">Visit on GitHub</a>
                </div>
                <div className="card col-6 card-custom-size">
                    <img    className="card-img-top card-img-sizes"
                            src="https://picsum.photos/150"
                            alt="Project preview" />
                    <h5 className="card-title ms-1">Project title</h5>
                    <p className="card-text ms-1"> Lorem ipsum ...</p>
                    <a href="#" className="btn btn-light" target="_blank">Visit on GitHub</a>
                </div>
            </section>
        </div>
    )
}

export default Projects;