import React from "react";

import InventoryAdmin from "../assets/InventoryAdmin.png";
import jeopardy from "../assets/jeopardy.png";
import InventoryLogs from "../assets/InventoryLogs.png";
import placeholder from "../assets/placeholder.jpg";
import placeholder_2 from "../assets/placeholder_2.jpg";
import placeholder_3 from "../assets/placeholder_3.jpg";
import phonelist from "../assets/phoneList.png";
import phonelist2 from "../assets/phoneList2.png";

const PortItem = ({ piece }) => {
  return (
    <div className="card small">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={piece.image}
          alt="oh no. remind me to fix this"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {piece.title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p className="demoLinks">
          {piece.repo ? <a href={piece.repo}>Repo</a> : ""}
          {piece.live ? <a href={piece.live}>Demo</a> : ""}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {piece.title}
          <i className="material-icons right">close</i>
        </span>
        <p>{piece.description}</p>
      </div>
    </div>
  );
};

export default PortItem;
