import React from "react";
import PortItem from "./PortItem";
import portArray from "../Port.json";

const Portfolio = () => {
  return (
    <div className="portfolioLayout">
      {portArray != null
        ? portArray.map(piece => <PortItem piece={piece} key={piece.id} />)
        : "Oh no. That didn't work"}
    </div>
  );
};

export default Portfolio;
