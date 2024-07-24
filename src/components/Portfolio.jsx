import { Container } from "react-bootstrap";
import Project_1 from "../assets/Branch_Out.png";
import Project_2 from "../assets/Now_Were_Cooking.png";
import Project_3 from "../assets/Game_Hub.png";
import Project_4 from "../assets/JATE.png";
import Project_5 from "../assets/Weather_Dashboard.png";
import Project_6 from "../assets/Coding_Quiz.png";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <Container className="Portfolio" id="portfolio">
      {/* <!-- Portfolio Header --> */}
      <div className="text-center mb-4">
        <h1 className="section-header">Portfolio</h1>
      </div>

      {/* <!-- Portfolio Projects --> */}
      <div className="row">
        {/* <!-- Project 1 --> */}
        <div className="col-md-4">
          <div className="project-box">
            <img src={Project_1} className="project-img" alt="Branch Out" />
            <div className="project-links">
              <a
                href="https://branch-out-web-service.onrender.com/"
                className="btn btn-primary btn-sm web_link"
              >
                Website Link
              </a>
              <a
                href="https://github.com/dmerk2/Branch-Out"
                className="btn btn-secondary btn-sm git_link"
              >
                GitHub Link
              </a>
            </div>
            <p>Branch Out</p>
          </div>
        </div>
        {/* <!-- Project 2 --> */}
        <div className="col-md-4">
          <div className="project-box">
            <img
              src={Project_2}
              className="project-img"
              alt={"Now We're Cooking!"}
            />
            <div className="project-links">
              <a
                href="https://nowwerecooking-494c285649f9.herokuapp.com/"
                className="btn btn-primary btn-sm web_link"
              >
                Website Link
              </a>
              <a
                href="https://github.com/RobKaiser97/Recipe-Blog"
                className="btn btn-secondary btn-sm git_link"
              >
                GitHub Link
              </a>
            </div>
            <p>{"Now We're Cooking!"}</p>
          </div>
        </div>
        {/* <!-- Project 3 --> */}
        <div className="col-md-4">
          <div className="project-box">
            <img
              src={Project_3}
              className="project-img"
              alt="Book Search Engine"
            />
            <div className="project-links">
              <a
                href="https://game-hub-two-gules.vercel.app/"
                className="btn btn-primary btn-sm web_link"
              >
                Website Link
              </a>
              <a
                href="https://github.com/jeslocascio/game-hub"
                className="btn btn-secondary btn-sm git_link"
              >
                GitHub Link
              </a>
            </div>
            <p>Game Hub</p>
          </div>
        </div>
      </div>
      <div className="row bottom_row">
        {/* <!-- Project 4 --> */}
        <div className="col-md-4">
          <div className="project-box">
            <img
              src={Project_4}
              className="project-img"
              alt="PWA Text Editor"
            />
            <div className="project-links">
              <a
                href="https://pwa-test-editor-jeslocascio-d9f1ad1ab017.herokuapp.com/"
                className="btn btn-primary btn-sm web_link"
              >
                Website Link
              </a>
              <a
                href="https://github.com/jeslocascio/PWA_Text_Editor"
                className="btn btn-secondary btn-sm git_link"
              >
                GitHub Link
              </a>
            </div>
            <p>PWA Text Editor</p>
          </div>
        </div>
        {/* <!-- Project 5 --> */}
        <div className="col-md-4">
          <div className="project-box">
            <img
              src={Project_5}
              className="project-img"
              alt="Weather Dashboard"
            />
            <div className="project-links">
              <a
                href="https://jeslocascio.github.io/Weather_Dashboard/"
                className="btn btn-primary btn-sm web_link"
              >
                Website Link
              </a>
              <a
                href="https://github.com/jeslocascio/Weather_Dashboard"
                className="btn btn-secondary btn-sm git_link"
              >
                GitHub Link
              </a>
            </div>
            <p>Weather Dashboard</p>
          </div>
        </div>
        {/* <!-- Project 6 --> */}
        <div className="col-md-4">
          <div className="project-box">
            <img src={Project_6} className="project-img" alt="Coding Quiz" />
            <div className="project-links">
              <a
                href="https://jeslocascio.github.io/JavaScript_Quiz/"
                className="btn btn-primary btn-sm web_link"
              >
                Website Link
              </a>
              <a
                href="https://github.com/jeslocascio/JavaScript_Quiz"
                className="btn btn-secondary btn-sm git_link"
              >
                GitHub Link
              </a>
            </div>
            <p>Coding Quiz</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
