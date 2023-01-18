import React, { useState } from "react";
import "./Card.css";
import Recipe from "./Recipe";

function Card({ id, recipe }) {
  const [showModal, setShowModal] = useState(0);

  const setId = () => {
    console.log(id);
    setShowModal(id);
  };

  const hideModal = (id) => {
    setShowModal(0);
  };

  return (
    <>
      <Recipe
        show={showModal === id}
        hide={() => hideModal(id)}
        recipe={recipe}
      />
      <div className="card">
        <div className="card-img" onClick={setId}>
          <div className="border back"></div>
          <div className="border overlay">
            <p className="view-recipe">View Recipe</p>
          </div>
          <img
            src={recipe.images.SMALL.url}
            loading="lazy"
            alt="food-pic"
            className="image"
          ></img>
        </div>
        <div className="card-label">{recipe.label}</div>
      </div>
    </>
  );
}

export default Card;
