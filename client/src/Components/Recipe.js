import React from "react";
import "./Recipe.css";

function Recipe({ show, hide, recipe }) {
  return (
    <>
      {show && (
        <div className="popup">
          <div className="content">
            <div className="close-btn" onClick={hide}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className="content-text">
              <div className="food-name">
                <h1>{recipe.label}</h1>
                <p>Dish Type: {recipe.dishType[0]}</p>
              </div>

              <div className="nutrients">
                <div className="serving nutri">
                  <p>{recipe.yield}</p>
                  <p>Servings</p>
                </div>
                <div className="calories nutri">
                  <p>{Math.floor(recipe.calories)}</p>
                  <p>Calories</p>
                </div>
              </div>

              <div className="i-container">
                <div className="ingredients">
                  <p>Ingredients</p>
                  <ul>
                    {recipe.ingredientLines.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="instructions">
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                  <button>INSTRUCTIONS</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Recipe;
