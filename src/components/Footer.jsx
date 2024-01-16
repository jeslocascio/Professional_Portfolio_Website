import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

import "../styles/Footer.css";

export default function Footer() {
  const resume =
    "https://docs.google.com/document/d/e/2PACX-1vRf84H747UVK4dMcs57ficz_0GbT4fcyIyehozTQICKJCXTVjYBirvENaKMXmPRLrxW2ep9ZEeV7Hl0/pub";
  return (
    <footer className="footer p-3 text-center">
      <div className="container">
        <div className="mb-0 d-flex justify-content-center">
          <div className="footer-link">
            <a
              href="https://www.linkedin.com/in/jesse-locascio-6778a02a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLinkedin className="footer-icon" id="linkedin-icon" />
            </a>
            <div>Linkedin</div>
          </div>
          <div className="footer-link mx-2 mx-sm-2 mx-md-4">
            <a
              href="https://github.com/jeslocascio"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaGithub className="footer-icon" id="github-icon" />
            </a>
            <div>Github</div>
          </div>
          <div className="footer-link">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <IoDocumentTextOutline className="footer-icon" id="resume-icon" />
            </a>
            <div>Resume</div>
          </div>
        </div>
        <p className="mb-0 pt-2 text-dark">© 2024 Jesse LoCascio</p>
      </div>
    </footer>
  );
}