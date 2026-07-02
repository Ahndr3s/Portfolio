import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
   const gitHubUrl = "https://github.com/Ahndr3s/Portfolio";
   const linkedInUrl = "https://www.linkedin.com/in/andres-jacinto/";
 
  return (
    <div className="contact-container ">
      <div className="cont-title-container">
        <div className="cont-title-wrap">
          <h1>Work</h1>
          <h1>With</h1>
        </div>
        <div className="cmd-title">
          <h1 className="cont-title">Me</h1>
        </div>
      </div>
      <div className="btns-container shadow-lg hover:shadow-xl">        
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
      <div className="email-banner"></div>
    </div>
  );
};
