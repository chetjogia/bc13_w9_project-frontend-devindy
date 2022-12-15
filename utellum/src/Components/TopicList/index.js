import React from "react";
import "./index.css";

export function TopicList({ bootcamperStrengthAndWeaknessArray }) {
  return (
    <div className="topic-list">
      <div className="strength">
        <h2>💪</h2>
        <ul>
          {bootcamperStrengthAndWeaknessArray.map(
            (element) =>
              element.strength_weakness === true && (
                <li>{element.topic_name}</li>
              )
          )}
        </ul>
      </div>
      <div className="weakness">
        <h2>🆘</h2>
        <ul>
          {bootcamperStrengthAndWeaknessArray.map(
            (element) =>
              element.strength_weakness === false && (
                <li>{element.topic_name}</li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}

export default TopicList;
