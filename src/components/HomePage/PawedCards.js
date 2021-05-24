import React, { useState, useEffect } from "react";
import "../../components/HomePage/Cards.css";
import { Redirect } from "react-router-dom";
import api from "../../config/api";
import CardView from "react-tinder-card";

function Cards() {
  useEffect(() => {
    if (localStorage.getItem("myAuth") != null) {
      var token = JSON.parse(localStorage.getItem("myAuth")).token;

      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      api.get("/api/getUsers", config).then((res) => {
        setDogs(res.data);
      });
    } else {
      setredirect(<Redirect to={"/"} />);
    }
  }, []);

  const [dogs, setDogs] = useState([]);
  const [redirect, setredirect] = useState();

  const swiped = (direction, dogName) => {
    console.log("remove" + dogName);
  };

  const outOfFrame = (dogName) => {
    console.log(dogName + "left the screen");
  };

  return (
    <div classname="pawed_cards">
      <div className="cardContainers">
        {dogs.map((character) => {
          if (character._id !== JSON.parse(localStorage.getItem("myAuth")).id) {
            return (
              <CardView
                className="swipe"
                key={character.key}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: `url(${character.imageUrl})` }}
                  className="card"
                >
                  <h3>{character.name}</h3>
                  <h5>{character.breed}</h5>
                </div>
              </CardView>
            );
          }
        })}
      </div>
      {redirect}
    </div>
  );
}

export default Cards;
