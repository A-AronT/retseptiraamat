import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";

const NewRecipe = (props) => {
    var [recipename, setRecipeName] = useState("");
    var [recipeduration, setRecipeDuration] = useState("");
    var [recipeingredients, setRecipeIngredients] = useState("");
    var [recipepreparation, setRecipePreparation] = useState("");
    var [recipetags, setRecipeTags] = useState("")
    var [newRecipe, setNewRecipe] = useState({});

    function combineRecipe(event) {
        event.preventDefault();
        var holder = [];
        holder = recipeingredients.split(",");
        var taggers = [];
        taggers = recipetags.split(",");
        setNewRecipe ({
            name : recipename,
            duration : recipeduration,
            ingredients : holder,
            preparation : recipepreparation,
            tags : taggers
        })

    }

    useEffect(() => {
        if (Object.keys(newRecipe).length !== 0) {
          props.addRecipe(newRecipe);
          props.history.push("/");
          setNewRecipe({});
        }
      }, [newRecipe, props]);

    return (
        <div>
            <form>
                <label for="name">Nimi</label>
                <input id="name" onInput={(event) => {setRecipeName(event.target.value);}} required/>
                <label for="duration">Valmistusaeg (min)</label>
                <input type="number" id="duration" onInput={(event) => {setRecipeDuration(event.target.value);}} required/>
                <label for="ingredients">Koostisained (komaga eraldatud)</label>
                <input id="ingredients" onInput={(event) => {setRecipeIngredients(event.target.value);}} required/>
                <label for="preparation">Valmistamine</label>
                <textarea id="preparation" onInput={(event) => {setRecipePreparation(event.target.value);}} required/>
                <label for="tags">Sildid (komaga eraldatud)</label>
                <input id="tags" onInput={(event) => {setRecipeTags(event.target.value);}}/>
                <input type="submit" value="Salvesta" onClick={(event) => combineRecipe(event)}/>
            </form>
        </div>
    )
}

export default withRouter(NewRecipe);