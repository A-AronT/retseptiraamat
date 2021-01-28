import React from "react";
import { Link, useParams } from "react-router-dom";

const Recipe = (props) => {
    const id = useParams().id;
    return (
      <div>
        <p><Link to={`/`}>Tagasi avalehele</Link></p>
        <h2>{props.recipes[id].name}</h2>
        <p>{props.recipes[id].duration}min</p>
        <ul>
          {props.recipes[id].ingredients.map((ingredient, index) => {return <li key={ingredient}>{ingredient}</li>;})}
        </ul>
        <p>{props.recipes[id].preparation}</p>
      </div>
    )
  }

  export default Recipe;