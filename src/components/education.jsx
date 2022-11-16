function Education(){
    return(
        <section className="education-section row justify-content-evenly">
            <ul className="list-group list-group-flush col-5 m-3">
                <h5>Tech Education</h5>
                <li className="list-group-item">
                    <div className="education--list-item">
                        <strong>Free Code Camp</strong>
                    </div>
                    <a
                    href="https://www.freecodecamp.org/certification/carolinerichert/responsive-web-design"
                    target="_blank"> Responsive Web Design Certificate
                    </a>
                </li>
                <li className="list-group-item">
                    <div className="education--list-item">
                        <strong>SheCodes.io </strong>
                    </div>
                    <a
                    href="#"
                    target="_blank"> SheCodes Plus Certificate
                    </a>
                </li>
            </ul>
            <ul className="list-group list-group-flush col-5 m-3">
                <h5>Medical Education</h5>
                <li className="list-group-item">
                    <div className="education--list-item">
                        <strong>2011 - 2018</strong>
                    </div>
                    Studying Medicine at Martin-Luther-University Halle-Wittenberg</li>
                <li className="list-group-item">
                    <div className="education--list-item">
                        <strong>2011 - 2018</strong>
                    </div>
                    Doctoral Dissertation at Clinic of Neurology University Hospital Halle-Saale
                </li>
            </ul>
        </section>
    )
}

export default Education;