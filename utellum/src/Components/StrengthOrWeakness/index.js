import React from "react";
import "./index.css";
import { topics } from "../../TestData";

export function StrengthOrWeakness({
  category,
  bootcamperStrengthAndWeaknessArray,
  hidden,
  addTopic,
  state,
  deleteTopic,
}) {

  //set strength value to be true as default on render of the component, this value is used to render either strengths or weaknesses. optionid assists in selecting dropdown box for adding topics (strength or weakness)
  let strength = true;
  let optionid = "S";

  //checks the category that is passed as a prop and if it is a weakness then sets strength to false and changes the optionid to W
  if (category === "Weakness") {
    strength = false;
    optionid = "W";
  }


  //looks at the bootcampers individual strengths and weaknesses and adds the associated colour for dynamic style rendering of the div colour, avoids hardcoding the colours in the database"
  for (let i = 0; i < bootcamperStrengthAndWeaknessArray.length; i++) {
    for (let j = 0; j < topics.length; j++) {
      if (
        bootcamperStrengthAndWeaknessArray[i].topic_name ===
        topics[j].topic_name
      ) {
        bootcamperStrengthAndWeaknessArray[i].topic_color =
          topics[j].topic_color;
      }
    }
  }

  return (
    <div>
      <div className="strength-profile">
        <h1>{category}:</h1>
        <ul className="topic-profile">

        {/* map through the S&W array for the bootcamper and render the strengths or weakness depending on the element.strength_weakness, strength = true then strengths will render and , if strength = false then weaknesses will render */}
          {bootcamperStrengthAndWeaknessArray.map(
            (element) =>
              element.strength_weakness === strength && (
                <div
                  className="topic-box"
                  style={{ backgroundColor: element.topic_color }}
                >
                  <div className="topic-name-SW">{element.topic_name}</div>
                  <div hidden={hidden} className="delete-SW">
                    {" "}
                    <button
                      className="delete-topic"
                      onClick={() => deleteTopic(element.unique_id)}
                      hidden={hidden}
                    >
                      x
                    </button>
                  </div>
                </div>
              )
          )}
        </ul>

        {/* Creates a dropdown of topic lists with the value being the topic id */}
        <div className="topic-dropdown-button">
          <select hidden={hidden} id={optionid} name="SW">
            {topics.map((topic) => (
              <option value={topic.id}>{topic.topic_name}</option>
            ))}
          </select>
          <button
            hidden={hidden}
            //on click of the add button it runs addTopic with the following arguments
            onClick={() =>
              addTopic(
                document.querySelector(`#${optionid}`).value,
                strength,
                state,
                document.querySelector(`#${optionid}`).options[
                  document.querySelector(`#${optionid}`).selectedIndex
                ].text,
                bootcamperStrengthAndWeaknessArray
              )
            }
            className="addStrengthOrWeakness"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default StrengthOrWeakness;
