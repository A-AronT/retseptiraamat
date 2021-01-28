import React from "react";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
    return (
      <div>
        <Link to={'/new'}>Lisa uus retsept</Link>
        <ul>
          {props.recipes.map((recipe, index) => {
            return <li key={recipe}> {props.recipes[index].name} {props.recipes[index].duration}min {props.recipes[index].tags} <Link to={`/recipes/${index}`}>Vaata lähemalt</Link></li>
          })}
        </ul>
      </div>
    )
  }

export default RecipeList;