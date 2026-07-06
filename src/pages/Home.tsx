import "./Home.css";

export const Home = () => {
  return (
    <div className="main-content max-w-5xl mx-auto px-6 md:px-12 py-10">
      <div className="title-container text 2xl md:text-4xl lg:text-5xl">
        <h1 className="main-title">
          Hello There<span className="cursor">_</span>
        </h1>
      </div>

      <p className="main-desc text-2xl sm:text-lg md:text-xl lg:text-2xl ">
        I'm a software engineer and a freelancer developer, i'm focused on
        built, design and maintain web products and experiences for small and
        medium sized clients.
      </p>
      <p className="main-desc text-2xl sm:text-lg md:text-xl lg:text-2xl ">
        Through the integration of the various services i offer, i am committed
        to delivering efficiency, reliability, authenticity, creativity, and an
        understanding of the user’s needs and aspirations.
        <br />
        <span className="block mt-4 overflow-hidden">
          <span className="cmd font-mono text-base sm:text-base md:text-lg lg:text-xl">
            Let’s build something special<span className="cursor">_</span>
          </span>
        </span>
      </p>
    </div>
  );
};
