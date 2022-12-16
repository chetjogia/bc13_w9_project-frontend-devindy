import React from "react";
import "./index.css";
import TopicList from "../TopicList";
import { useState } from "react";
import { strengths_weaknesses } from "../../TestData";
import { Link } from "react-router-dom";

export function BootcamperItem(props) {


  let bootcamperStrengthAndWeaknessArray = props.bootcamperSW.filter(
    (element) => element.bootcamper_id === props.id)

  return (
    <div className="bootcamper-item">
      <div className="bootcamper-left-half">
        <img className="profile-pic" src={props.image} alt="profile"></img>
        <div className="bootcamper-info">
          <div>
            <h1 className="bootcamper-one">
              {props.firstName} {props.lastName}
            </h1>
          </div>
          <div className="button-div">
            <Link to={`/profile/${props.id}`} state={{ id: props.id }}>
              <button className="info-button">View</button>
            </Link>
            <Link>
              <button className="info-button">Message</button>
            </Link>
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
