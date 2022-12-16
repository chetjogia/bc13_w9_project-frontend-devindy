import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import StrengthOrWeakness from "../StrengthOrWeakness";
import { useState } from "react";

export function BootcamperProfile(props) {
  //destructuring state property from the location object - this contains the user id
  const { state } = useLocation();

  //setting states for what should be locked and hidden
  const [locked, setLocked] = useState(true);


 //obtain the strength and weaknesses of individual bootcamper using the id in the state object
  let bootcamperStrengthAndWeaknessArray = props.bootcamperSW.filter(
    (element) => element.bootcamper_id === state.id
  )
  
  //filters the bootcamper array to only locate the bootcamper that we want to view using the state
  let bootcamper = props.bootcamperArray.filter((element) => {
    return element.bootcamper_id === state.id;
  });


  function correctPassword(event) {
    let password = document.querySelector(".password").value;

    if (password === bootcamper[0].password) {
      setLocked(false); 
      document.querySelector(".description-form").hidden = false; //unhides the form for About Me
      document.querySelector(".password").hidden = true; //hides password field
      document.querySelector(".submit-password").hidden = true; //hides submit password button
      document.querySelector(".logged-in").hidden = false; //shows user is logged in
      document.querySelector(".password").value = ""; //sets password value to empty
    } else {
      setLocked(true);
      document.querySelector(".password").value = ""; //sets password value to empty
      alert("Please enter the correct password");
    }
  }

  //function to hide and unhide the password input if the view and edit dropdown is selected
  function unhidePasswordInput() {
    let e = document.querySelector("#view");
    if (e.value === "view") {
      setLocked(true); 
      document.querySelector(".logged-in").hidden = true; //hide user being logged in
      document.querySelector(".description-form").hidden = true; //hide the about me form
      document.querySelector(".saved").hidden = true; //hide the word saved on screen
    } else {
      document.querySelector(".password").value = "";
      document.querySelector(".password").hidden = false; //unhide password field when switched from view
      document.querySelector(".submit-password").hidden = false; //unhide the button
    }
  }

  return (
    <div className="bootcamper-profile">
      <div className="name-strength-weakness">
        <div className="bootcamper-profile-header">
          <img
            className="profile-picture"
            src={bootcamper[0].image_url}
            alt="profile"
          ></img>
          <div className="name-SW">
            <div className="view-name">
              <h1 className="bootcamper-name-profile">
                {bootcamper[0].first_name} {bootcamper[0].last_name}
              </h1>

              <div className="view">
                <select onChange={unhidePasswordInput} id="view" name="view">
                  <option value="view">View</option>
                  <option value="edit">Edit</option>
                </select>
                <div className="enter-password">
                  <input
                    hidden={true}
                    className="password"
                    type="password"
                    placeholder="type password here"
                  ></input>
                  <button
                    className="submit-password"
                    hidden={true}
                    onClick={correctPassword}
                  >
                    Submit Password
                  </button>
                  <p hidden={true} className="logged-in">
                    Logged In
                  </p>
                </div>
              </div>
            </div>

            <div className="strength-and-weakness">
              <StrengthOrWeakness
                deleteTopic={props.deleteTopic}
                state={state.id}
                addTopic={props.addTopic}
                hidden={locked}
                className="topic-list-profile"
                category="Strength"
                bootcamperStrengthAndWeaknessArray={
                  bootcamperStrengthAndWeaknessArray
                }
              />
              <StrengthOrWeakness
                deleteTopic={props.deleteTopic}
                state={state.id}
                addTopic={props.addTopic}
                hidden={locked}
                className="topic-list-profile"
                category="Weakness"
                bootcamperStrengthAndWeaknessArray={
                  bootcamperStrengthAndWeaknessArray
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <h1>About Me</h1>
        <p className="visible-description" hidden={!locked}>
          {bootcamper[0].description}
        </p>
        <form>
          <input
            type="text"
            className="description-form"
            hidden={locked}
            defaultValue={bootcamper[0].description}
          ></input>
        </form>
        <div className="saved-pair">
          <h3 hidden={true} className="saved">
            Saved!
          </h3>
          <button
            className="save"
            hidden={locked}
            onClick={() => {
              return props.patchRequestHandler(
                document.querySelector(".description-form").value,
                state.id
              );
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="availability">
        <h1>Availability</h1>
        <ul className="availability-list">
          <li>
            <h3>Monday:</h3>
            <p>Available 9-5pm</p>
          </li>
          <li>
            <h3>Tuesday:</h3>
            <p>Available 9-5pm</p>
          </li>
          <li>
            <h3>Wednesday:</h3>
            <p>Available 9-5pm</p>
          </li>
          <li>
            <h3>Thursday:</h3>
            <p>Available 9-5pm</p>
          </li>
          <li>
            <h3>Friday:</h3>
            <p>Available 9-5pm</p>
          </li>
          <li>
            <h3>Saturday:</h3>
            <p>Available 9-5pm</p>
          </li>
          <li>
            <h3>Sunday:</h3>
            <p>Available 9-5pm</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BootcamperProfile;
