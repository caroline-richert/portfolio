import About from "./about";
import Projects from "./projects";
import Education from "./education";
import Workexperience from "./work";

function Mainpart(){
    return(
        <div className="container-lg portfolio--main">
            <About />
            <Projects />
            <Education />
            <Workexperience />
        </div>
        

    )
}

export default Mainpart;