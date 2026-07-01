import "./Home.css";

export const Home = () => {
  return (
    <div className="main-content">
      <div className="title-container">
        <h1 className="main-title">
          Hello There<span className="cursor">_</span>
        </h1>
      </div>

      <p className="main-desc">
        I'm a software engineer and a freelancer developer, i'm focused on
        built, design and maintain web products and experiences for small and
        medium sized clients.
      </p>
      <p className="main-desc">
        Through the integration of the various services I offer, I am committed
        to delivering efficiency, reliability, authenticity, creativity, and an
        understanding of the user’s needs and aspirations.
        <span className="cmd">
          Let’s build something special<span className="cursor">_</span>
        </span>
      </p>
    </div>
  );
};
