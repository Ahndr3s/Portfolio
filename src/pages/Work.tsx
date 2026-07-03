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

      <div className="card-grid">
        {
          data.map((card: ItemData) => (
            <Cards
              key={card.id}
              item = {card}
            />
          ))
        }
      </div>
    </>
  );
};
