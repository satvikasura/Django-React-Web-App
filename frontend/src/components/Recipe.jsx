import React from "react";
import '../styles/RecipeCard.css';

function Recipe ({recipe, onDelete}) {
    return (
        <div className="recipe-container">
            <h2 className="recipe-title"><u>{recipe.name}</u></h2>
            <p className="recipe-detail">{recipe.description}</p>
            <p className="recipe-detail"><b>Ingredients:</b> {recipe.ingredients}</p>
            <p className="recipe-detail"><b>Process:</b> {recipe.process}</p>
            <p className="recipe-detail"><b>Tags:</b> {recipe.tags}</p>
            {recipe.notes && <p className="recipe-detail"><b>Notes:</b> {recipe.notes}</p>}
            <div className="delete-btn-container">
            <button className="delete-btn" onClick={() => onDelete(recipe.id)}>
                Delete
            </button>
            </div>
        </div>
    );
}

export default Recipe;