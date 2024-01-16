import {Container} from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaGit,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiSequelize,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiHeroku,
  SiAdobe,
  SiPhotopea,
} from "react-icons/si";
import "../styles/Skills.css";

function Skills() {
  const frontEndIcons = [
    { icon: <SiAdobe />, text: "Adobe" },
    { icon: <FaFigma />, text: "Figma" },
    { icon: <SiPhotopea />, text: "Photopea" },
    { icon: <FaBootstrap />, text: "Bootstrap" },
    { icon: <FaHtml5 />, text: "HTML5" },
    { icon: <SiJavascript />, text: "Javascript" },
    { icon: <FaCss3 />, text: "CSS3" },
    { icon: <SiTailwindcss />, text: "Tailwind" },
    { icon: <FaWordpress />, text: "Wordpress" },
    { icon: <FaReact />, text: "React" },
    { icon: <FaGit />, text: "Git" },
    { icon: <SiJquery />, text: "Jquery" },
  ];

  const backEndIcons = [
    { icon: <SiMongodb />, text: "MongoDB" },
    { icon: <SiHeroku />, text: "Heroku" },
    { icon: <SiGraphql />, text: "Graphql" },
    { icon: <SiMysql />, text: "SQL" },
    { icon: <FaDatabase />, text: "NoSQL" },
    { icon: <FaNodeJs />, text: "Node" },
    { icon: <SiSequelize />, text: "Sequelize" },
    { icon: <SiExpress />, text: "Express" },
  ];


    return (
    <Container className="Skills">
    <div>
      <div className="text-center mb-4">
        <h1 className="section-header">Skills</h1>
      </div>

      <div className="text-center mb-4">
        <h3 className="section-subheader">Front-End Skills</h3>
      </div>
      <div className="front-end-skills">
        {frontEndIcons.map((item, index) => (
          <div key={index}>
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-4">
        <h3 className="section-subheader">Back-End Skills</h3>
      </div>
      <div className="back-end-skills">
        {backEndIcons.map((item, index) => (
          <div key={index}>
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
}

export default Skills;
