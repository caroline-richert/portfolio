function Education(){
    return(
       <main className="main--content">
        <section className="main--education">
            <h3 className="education--headline text-muted">Education</h3>
            <div className="education">
                <h5>Tech</h5>
                <ul className="education--group">
                    <li className="education--group-item">
                        <div className="education--list-item">
                            <strong>Free Code Camp</strong>
                        </div>
                        <a
                          className="portfolio-anchor"
                        href="https://www.freecodecamp.org/certification/carolinerichert/responsive-web-design"
                        target="_blank"> Responsive Web Design Certificate
                        </a>
                    </li>
                    <li className="education--group-item">
                        <div className="education--list-item">
                            <strong>SheCodes.io </strong>
                        </div>
                        <a
                        className="portfolio-anchor"
                        href="#"
                        target="_blank"> SheCodes Plus Certificate
                        </a>
                    </li>
                </ul>
                <hr />
                <h5>Medical</h5>
                <ul className="education--group">
                    <li className="education--group-item">
                        <div className="education--list-item">
                            <strong>Martin-Luther-University Halle-Wittenberg</strong>
                        </div>Medicine / 2011 - 2018</li>
                    <li className="education--group-item">
                        <div className="education--list-item">
                            <strong>University Hospital Halle-Saale - Clinic of Neurology</strong>
                        </div>
                        Doctoral Dissertation / 2017-2023
                    </li>
                        <ul>
                            <li>
                                Title: <span className="fst-italic">'Anoctamin-5-Myopathie – Klinik, Histologie und Proteom einer Hallenser Kohorte'</span>
                            </li>
                            <li>2021: Speaker at ’25. Kongress
                                des Wissenschaftlichen Beirates
                                der Deutschen Gesellschaft für
                                Muskelkranke e.V.’ ‑
                                <a  className="portfolio-anchor"
                                    href="https://programm.conventus.de/index.php?id=dgm2021&tx_coprogramm_programm%5Bprogramm%5D=41&tx_coprogramm_programm%5Bsession%5D=18&tx_coprogramm_programm%5BcurrentPage%5D=&tx_coprogramm_programm%5Baction%5D=programm&tx_coprogramm_programm%5Bcontroller%5D=Source&cHash=4fb78c39c44cddffa6407fdedc5833e3">
                                'Session 17: Hilft die Genetik bei der Abschätzung der Prognose?'
                                </a>
                            </li>
                        </ul>

                </ul>
            </div>
        </section>
        </main>
    )
}

export default Education;