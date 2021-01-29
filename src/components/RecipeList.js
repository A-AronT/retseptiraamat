import React from "react";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
    return (
      <div>
        <Link to={'/new'}>Lisa uus retsept</Link>
        <ul>
          {props.recipes.map((recipe, index) => {
            return <li key={recipe}> <span>{props.recipes[index].name}</span> <span>{props.recipes[index].duration}min</span> <span>{props.recipes[index].tags.join(" ")}</span> <Link to={`/recipes/${index}`}>Vaata lähemalt</Link></li>
          })}
        </ul>
      </div>
    )
  }

export default RecipeList;