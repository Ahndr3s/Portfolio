import { Cards } from "../components/Cards";
import "./Work.css";

export const Work = () => {
  return (
    <>
      <div className="title-container">
        <h1 className="main-title">
          Into The Valley of Dev<span className="cursor">_</span>
        </h1>
      </div>

      <div className="card-grid">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};
