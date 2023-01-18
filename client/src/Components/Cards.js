import Card from "./Card";
import "./Cards.css";

function Cards({ load, validQuery, recipes }) {
  console.log(recipes);
  return (
    <>
      {load ? (
        <>
          <div className="loading">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            <div>Loading...</div>
          </div>
        </>
      ) : (
        <>
          {validQuery && recipes.length !== 0 ? (
            <>
              <div className="cards">
                {recipes.map((recipe, index) => (
                  <Card
                    key={index}
                    id={recipe.recipe.totalWeight}
                    recipe={recipe.recipe}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div>
                We couldn't find any matches undefined <br />
                Double check your search for any typos or spelling errors - or
                try a different search term.
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Cards;
