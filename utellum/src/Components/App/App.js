import "./App.css";
import About from "../About";
import BootcamperList from "../BootcamperList";
import Header from "../Header";
import Search from "../Search";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BootcamperProfile from "../BootcamperProfile";
import { v4 as uuidv4 } from "uuid";


function App() {
  /*Declaring states that need to be used
  bootcamperArray: state to contain an array of bootcampers on the course. Array of objects - each object is a bootcamper
  bootcamperSW: state to contain an array of bootcampers strengths and weaknesses. Array of objects
  input: state to contain the text in the input field of the search bar
  filter: state to maintain the choice of dropdown in the search bar
*/

  const [bootcamperArray, setBootcamperArray] = useState([]);
  const [bootcamperSW, setBootcamperSW] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("first_name");



/*
After mounting, this useEffect checks if there is anything in the search box (i.e. is this a first load of the page or are we resetting the search)
If so then get the bootcamper data from the backend. This will return an array of bootcampers and an array of the strengths and weaknesses
If the search bar is not empty then check which drop-down selection has been chosen, and filter the current state of bootcamperArray accordingly
*/
  useEffect(() => {
    if (input !== "") {
      let filteredBootcamperArray = [];
      if (filter === "first_name" || filter === "last_name") {
        filteredBootcamperArray = bootcamperArray.filter((element) => {
          return element[filter].toLowerCase().includes(input);
        });
      } else if (filter === "strength" || filter === "weakness") {
        filteredBootcamperArray = bootcamperArray.filter((element) => {
          return element[filter].some((e) => e.includes(input)); //as we want to check a nested array in a key value pair, first find the key by using element[filter], then in the array check if there is some value that includes what is in the input
        });
      }
      setBootcamperArray(filteredBootcamperArray);
    } else {
      async function getBootcamperData() {
        const response = await fetch("https://utellum-back-end.onrender.com/api/bootcampers/");
        const data = await response.json();
        const bootcamperArray = data.payload[0];
        const bootcamperStrengthsAndWeaknesses = data.payload[1];
        setBootcamperArray(bootcamperArray);
        setBootcamperSW(bootcamperStrengthsAndWeaknesses);
      }

      getBootcamperData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  /*
  adding strengths and weakness to each bootcamper in an array
  we do this by creating an array of the strengths, and an array of the weakness of the bootcamper, based on the bootcamperSW state. These two arrays are then added as a key value pair to the bootcamperArray state.
  */

  for (let i = 0; i < bootcamperArray.length; i++) {
    let strengthArray = [];
    let weaknessArray = [];
    for (let j = 0; j < bootcamperSW.length; j++) {
      if (
        bootcamperSW[j].bootcamper_id === bootcamperArray[i].bootcamper_id &&
        bootcamperSW[j].strength_weakness === true
      ) {
        strengthArray.push(bootcamperSW[j].topic_name.toLowerCase());
      } else if (
        bootcamperSW[j].bootcamper_id === bootcamperArray[i].bootcamper_id &&
        bootcamperSW[j].strength_weakness === false
      ) {
        weaknessArray.push(bootcamperSW[j].topic_name.toLowerCase());
      }
    }
    bootcamperArray[i]["strength"] = strengthArray;
    bootcamperArray[i]["weakness"] = weaknessArray;
  }

  //function to addTopic - this is used in the StrengthOrWeakness Component.
  //We create two objects one that posts to the database (SWObject), and one that mirrors the database locally (SWLocalObject)
  
  function addTopic(
    topic_id,
    strength,
    id,
    topic_name,
    individualBootcamperSW
  ) {
    let SWObject = {
      topicId: topic_id,
      bootcamperId: id,
      strengthOrWeakness: strength,
      uniqueId: uuidv4(), //adding unique ID so the SW can be referenced by an ID and deleted
    };
    let SWLocalObject = {
      topicId: +topic_id,
      bootcamper_id: id,
      strength_weakness: strength,
      topic_name: topic_name,
      unique_id: uuidv4(), //adding unique ID so the SW can be referenced by an ID and deleted
    };
    let exists = false; //boolean to check if the S or W already exists or not
    const newArray = [...bootcamperSW]; //creating shallow copy of bootcamperSW state so we do not mutate the original state

    //For loop checking if the topic already exists in the SW of an individual bootcamper.
    for (let i = 0; i < individualBootcamperSW.length; i++) {
      if (individualBootcamperSW[i].topic_name === SWLocalObject.topic_name) {
        exists = true;
      }
    }

    //If the topic doesnt exist we can add the topic to the database as a strength or weakness. We also push the localobject to a newArray and set the state of BootcamperSW to the newArray, to re-render the topics once added and keep the BootcamperSW array consistent with the back end.
    if (!exists) {
      newArray.push(SWLocalObject);
      fetch("https://utellum-back-end.onrender.com/api/bootcampers/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SWObject),
      }).then((response) => response.json());
      setBootcamperSW(newArray);
    } else {
      alert(
        "You already have this topic as a strength or weakness, please choose another, or delete the topic before adding"
      );
    }
  }


//function to deal with a PATCH request for the about me section of the profile page
  function patchRequestHandler(description, id) {
    let newObject = { description: description };
    fetch(`https://utellum-back-end.onrender.com/api/bootcampers/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObject),
    }).then((response) => response.json());

  //This again mirrors whats happening in the backend by updating the description of the specific bootcamper in the front end in the bootcamperArray state.
    for (let i = 0; i < bootcamperArray.length; i++) {
      if (bootcamperArray[i].bootcamper_id === id) {
        bootcamperArray[i].description = description;
      }
    }
    let newArray = [...bootcamperArray];
    setBootcamperArray(newArray);
   

    //Show saved in green on the page
    document.querySelector(".saved").hidden = false;
    
    //Timeout to show that the information has been saved and remove from screen after 2 seconds
    setTimeout(endSave, 2000);

    function endSave() {
      document.querySelector(".saved").hidden = true;
    }
  
  }

  //setting input state to be the value of the input field. Called in the Search Component
  function inputHandler(event) {
    let inputValue = document.querySelector(".input").value;
    setInput(inputValue.toLowerCase());
    setBootcamperArray(bootcamperArray);
  }

  //seeting filter state to be the value of what is selected in the drop down. Called in the Search Component
  function searchFilterChoice() {
    let filter = document.querySelector("#search-filter").value;
    setFilter(filter);
  }

  //Delete topic handler - mirror the back end with updating the state of bootcamperSW in the front end. Called in StrengthOrWeaknesses Component
  function deleteTopic(id) {
    fetch("https://utellum-back-end.onrender.com/api/bootcampers/" + id, {
      method: "DELETE",
    }).then((res) => res.text()); // or res.json()

    let index = 0;
    for (let i = 0; i < bootcamperSW.length; i++) {
      if (bootcamperSW[i].unique_id === id) {
        index = i;
      }
    }
    let newArray = [
      ...bootcamperSW.slice(0, index),
      ...bootcamperSW.slice(index + 1),
    ];
    setBootcamperSW(newArray);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Search
                searchFilterChoice={searchFilterChoice}
                inputHandler={inputHandler}
              />
              <div>
                <BootcamperList
                  input={input}
                  bootcamperArray={bootcamperArray}
                  bootcamperSW={bootcamperSW}
                />
              </div>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        />
        <Route
          exact
          path="/profile/:id"
          element={
            <>
              <BootcamperProfile
                patchRequestHandler={patchRequestHandler}
                deleteTopic={deleteTopic}
                addTopic={addTopic}
                bootcamperArray={bootcamperArray}
                bootcamperSW={bootcamperSW}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
