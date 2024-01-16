import {Container} from "react-bootstrap";
import Project_1 from '../assets/Branch_Out.png';
import Project_2 from '../assets/Now_Were_Cooking.png';
import Project_3 from '../assets/Book_Search_Engine.png';
import Project_4 from '../assets/JATE.png';
import Project_5 from '../assets/Weather_Dashboard.png';
import Project_6 from '../assets/Coding_Quiz.png';
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <Container className="Portfolio">
    {/* <!-- Portfolio Header --> */}
    <div className="text-center mb-4">
        <h1 className="section-header">Portfolio</h1>
    </div>

    {/* <!-- Portfolio Projects --> */}
    <div className="row">
        {/* <!-- Project 1 --> */}
        <div className="col-md-4">
            <div className="project-box">
                <img src={Project_1} className="project-img" alt="Project 1" />
                <div className="project-links">
                    <a href="#" className="btn btn-primary btn-sm">Website Link</a>
                    <a href="#" className="btn btn-secondary btn-sm">GitHub Link</a>
                </div>
                <p>Branch Out</p>
            </div>
        </div>
        {/* <!-- Project 2 --> */}
        <div className="col-md-4">
            <div className="project-box">
                <img src={Project_2} className="project-img" alt="Project 1" />
                <div className="project-links">
                    <a href="#" className="btn btn-primary btn-sm">Website Link</a>
                    <a href="#" className="btn btn-secondary btn-sm">GitHub Link</a>
                </div>
                <p>{"Now We're Cooking!"}</p>
            </div>
        </div>
        {/* <!-- Project 3 --> */}
        <div className="col-md-4">
            <div className="project-box">
                <img src={Project_3} className="project-img" alt="Project 1" />
                <div className="project-links">
                    <a href="#" className="btn btn-primary btn-sm">Website Link</a>
                    <a href="#" className="btn btn-secondary btn-sm">GitHub Link</a>
                </div>
                <p>Book Search Engine</p>
            </div>
        </div>
    </div>
    <div className="row bottom_row">
        {/* <!-- Project 4 --> */}
        <div className="col-md-4">
            <div className="project-box">
                <img src={Project_4} className="project-img" alt="Project 1" />
                <div className="project-links">
                    <a href="#" className="btn btn-primary btn-sm">Website Link</a>
                    <a href="#" className="btn btn-secondary btn-sm">GitHub Link</a>
                </div>
                <p>PWA Text Editor</p>
            </div>
        </div>
        {/* <!-- Project 5 --> */}
        <div className="col-md-4">
            <div className="project-box">
                <img src={Project_5} className="project-img" alt="Project 1" />
                <div className="project-links">
                    <a href="#" className="btn btn-primary btn-sm">Website Link</a>
                    <a href="#" className="btn btn-secondary btn-sm">GitHub Link</a>
                </div>
                <p>Weather Dashboard</p>
            </div>
        </div>
        {/* <!-- Project 6 --> */}
        <div className="col-md-4">
            <div className="project-box">
                <img src={Project_6} className="project-img" alt="Project 1" />
                <div className="project-links">
                    <a href="#" className="btn btn-primary btn-sm">Website Link</a>
                    <a href="#" className="btn btn-secondary btn-sm">GitHub Link</a>
                </div>
                <p>Coding Quiz</p>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Portfolio
