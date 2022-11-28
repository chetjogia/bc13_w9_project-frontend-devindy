import React from "react";
import BootcamperItem from "../BootcamperItem";
import "./index.css";

export function BootcamperList(props) {
  return (
    <div className="bootcamper-container-list">
      {props.bootcamperArray.map((bootcamper) => {
        return (
          <BootcamperItem
            bootcamperSW={props.bootcamperSW}
            key={bootcamper.id}
            id={bootcamper.bootcamper_id}
            image={bootcamper.image_url}
            firstName={bootcamper.first_name}
            lastName={bootcamper.last_name}
          />
        );
      })}
    </div>
  );
}

export default BootcamperList;
