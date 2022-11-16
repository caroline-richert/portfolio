function Workexperience(){
    return(
        <section className="work-section">
            <h5>Work experience</h5>
            <div className="row justify-content-evenly work--list m-3">
                <div className="work--list-item col-4">
                    <strong>Since 02-2021
                        <div>AMD TÜV Rheinland</div>
                    </strong>
                    <p>Physician in Training Occupational Health</p>
                    <ul>
                        <li>Part of Digitalization Process</li>
                        <li>Health consulting for different companies in Thuringia and Saxony</li>
                    </ul>
                </div>

                <div className="work--list-item col-4">
                    <strong>05-2020 - 01-2021
                        <div>Krankenhaus Martha-Maria Halle-Dölau</div>
                    </strong>
                    <p>Physician in Training</p>
                </div>

                <div className="work--list-item col-4">
                    <strong>08-2018 - 04-2020
                        <div>University Hospital Halle-Saale</div>
                    </strong>
                    <p>Physician in Training Neurology</p>
                    <ul>
                        <li>Working at the Outpatient clinic for moto neural disease</li>
                        <li>Working at the ICU and Stroke Unit</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Workexperience;