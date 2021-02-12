import './App.css';
import React, {useEffect, useState} from "react"
import Recipe from "./Recipe"

const App = () => {

    const APP_ID = "e13c4d28"   
    const APP_KEY ="bba6a4482d7dd3bf7e821422178a5d70"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery]= useState("chicken")

    useEffect(() => {
     getRecipes()
    },[query])

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
      console.log(data.hits)
    }

    const updateSearch = e => {
      setSearch(e.target.value)
    }

    const getSearch = e => {
      e.preventDefault()
      setQuery(search)
    }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} {...recipe.recipe} />
      ))}
      </div>
    </div>
  );
}

export default App;
