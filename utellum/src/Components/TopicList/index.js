import React from "react";
import "./index.css";

//component renders topics for individual bootcamper on their bootcamper profile card
export function TopicList({ bootcamperStrengthAndWeaknessArray }) {
  return (
    <div className="topic-list">
      <div className="strength">
        <h2>💪</h2>
        <ul>
        {/* map through the array and render the topic names for strengths */}
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
           {/* map through the array and render the topic names for weaknesses */}
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
