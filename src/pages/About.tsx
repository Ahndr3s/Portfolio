import "./About.css";

export const About = () => {
  return (
    <>
      <div className="pb-10">
        <h1 className="title-container">
          About Me<span className="cursor">_</span>
        </h1>
        <p className="about-desc text-base md:text-2xl lg:text-2xl">
          Freelance Developer from Mexico with experience in product companies,
          web platforms, user-centred applications. I'm currently seeking to
          expand my professional scope within the web development industry.
          Outside of code, I enjoy videogames and music.
        </p>
      </div>

      <div className="stage-container text-base md:text-2xl lg:text-2xl my-2">
        <div className="stage-title">
          <h2 className="stage-phase min-w-[2rem] md:min-w-[3rem] lg:min-w-[3rem]">
            a)
          </h2>
          <h2 className="stage-name">Strategy</h2>
        </div>

        <p className="stage-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tristique turpis vel convallis posuere. Aliquam malesuada ex urna, eu
          dapibus nunc dignissim eu. Donec convallis, dui vel dapibus rutrum,
          sem augue placerat leo, ac eleifend erat orci at sapien. Ut eleifend,
          urna fringilla finibus rutrum, quam libero efficitur dolor, ac finibus
          nibh tortor interdum erat
        </p>
      </div>
      <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto p-5" />
      <div className="stage-container text-base md:text-2xl lg:text-2xl my-2">
        <div className="stage-title">
          <span className="stage-phase min-w-[2rem] md:min-w-[3rem] lg:min-w-[3rem]">
            b)
          </span>
          <span className="stage-name">Design</span>
        </div>

        <p className="stage-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tristique turpis vel convallis posuere. Aliquam malesuada ex urna, eu
          dapibus nunc dignissim eu. Donec convallis, dui vel dapibus rutrum,
          sem augue placerat leo, ac eleifend erat orci at sapien. Ut eleifend,
          urna fringilla finibus rutrum, quam libero efficitur dolor, ac finibus
          nibh tortor interdum erat
        </p>
      </div>
      <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto p-5" />
      <div className="stage-container text-base md:text-2xl lg:text-2xl my-2">
        <div className="stage-title">
          <h2 className="stage-phase min-w-[2rem] md:min-w-[3rem] lg:min-w-[3rem]">
            c)
          </h2>
          <h2 className="stage-name">Development</h2>
        </div>

        <p className="stage-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tristique turpis vel convallis posuere. Aliquam malesuada ex urna, eu
          dapibus nunc dignissim eu. Donec convallis, dui vel dapibus rutrum,
          sem augue placerat leo, ac eleifend erat orci at sapien. Ut eleifend,
          urna fringilla finibus rutrum, quam libero efficitur dolor, ac finibus
          nibh tortor interdum erat
        </p>
      </div>
      <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto p-5" />
      <div className="stage-container text-base md:text-2xl lg:text-2xl my-2">
        <div className="stage-title">
          <h2 className="stage-phase min-w-[2rem] md:min-w-[3rem] lg:min-w-[3rem]">
            d)
          </h2>
          <h2 className="stage-name">Quality Assurance</h2>
        </div>

        <p className="stage-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tristique turpis vel convallis posuere. Aliquam malesuada ex urna, eu
          dapibus nunc dignissim eu. Donec convallis, dui vel dapibus rutrum,
          sem augue placerat leo, ac eleifend erat orci at sapien. Ut eleifend,
          urna fringilla finibus rutrum, quam libero efficitur dolor, ac finibus
          nibh tortor interdum erat
        </p>
      </div>
    </>
  );
};
