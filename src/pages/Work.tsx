import { Cards } from "../components/Cards";
import "./Work.css";
import { data, ItemData } from "../../assets/data/data";

export const Work = () => {
  return (
    <>
      <div className="title-container">
        <h1 className="main-title">
          Into The Valley of Dev<span className="cursor">_</span>
        </h1>
      </div>

      <div className="card-grid grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {data.map((card: ItemData) => (
          <Cards key={card.id} item={card} />
        ))}
      </div>
    </>
  );
};
