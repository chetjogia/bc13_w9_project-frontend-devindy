import React from "react";
import "./index.css";
import TopicList from "../TopicList";
import { Link } from "react-router-dom";
import bootcamperprofile from "./default.png";
export function BootcamperItem(props) {
  let bootcamperStrengthAndWeaknessArray = props.bootcamperSW.filter(
    (element) => element.bootcamper_id === props.id
  );

  return (
    <div className="bootcamper-item">
      <div className="bootcamper-left-half">
        <img
          className="profile-pic"
          src={bootcamperprofile}
          alt="profile"
        ></img>
        <div className="bootcamper-info">
          <div className="bootcamper-heading">
            <h1 className="bootcamper-one">
              {props.firstName} {props.lastName}
            </h1>
          </div>
          <div className="button-div">
            <Link
              className="info-button"
              to={`/profile/${props.id}`}
              state={{ id: props.id }}
            >
              View
            </Link>
            <Link className="info-button">Message</Link>
          </div>
        </div>
      </div>
      <div className="bootcamper-right-half">
        <TopicList
          bootcamperStrengthAndWeaknessArray={
            bootcamperStrengthAndWeaknessArray
          }
        />
      </div>
    </div>
  );
}

export default BootcamperItem;
