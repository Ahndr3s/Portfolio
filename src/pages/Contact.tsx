import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  const gitHubUrl = "https://github.com/Ahndr3s";
  const linkedInUrl = "https://www.linkedin.com/in/andres-jacinto/";

  return (
    <div className="contact-container ">
      <div className="cont-title-container flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
        <div className="cont-title-wrap">
          <h1>Work</h1>
          <h1>With</h1>
        </div>
        <div className="cmd-title">
          <h1 className="cont-title">
            Me<span className="cursor">_</span>
          </h1>
        </div>
        <div className="btns-container shadow-lg hover:shadow-xl top-25 left-[21%] md:top-35 md:left-[16%] lg:top-20 lg:left-[20%]">
          <div className="button-row">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="#000"
                style={{ marginLeft: "1rem" }}
              />
            </a>
          </div>
          <div className="button-row">
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                color="#000"
                style={{ marginLeft: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="email-banner top-[91%] left-[35%] md:top-[94%] md:left-[67%] lg:top-[91%] lg:left-[80%]">
        andresjmoreno97@gmail.com
      </div>
    </div>
  );
};
