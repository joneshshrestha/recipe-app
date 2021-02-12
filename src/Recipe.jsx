import React from 'react';
import style from "./recipe.module.css";

const Recipe = (props) => {
    const { label, calories, image, ingredients } = props
    return (
        <div className={style.recipes}>
            <h1>{label}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe
