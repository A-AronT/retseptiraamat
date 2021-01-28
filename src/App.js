import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";


const App = () => {

  var [recipes, setRecipes] = useState([])

  function getRecipes() {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(data => data.json()).then(data => setRecipes(data))
  }

  function addRecipe(newRecipe) {
    setRecipes(recipes.concat([newRecipe]));
  }

  useEffect(() => {
    getRecipes();
  }, []);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <h1>Retseptiraamat</h1>
          <RecipeList recipes={recipes} />
        </Route>
        <Route path="/recipes/:id">
          <Recipe recipes={recipes} />
        </Route>
        <Route path="/new">
          <NewRecipe addRecipe={addRecipe}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;