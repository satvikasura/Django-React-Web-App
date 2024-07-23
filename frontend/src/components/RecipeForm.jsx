import { useState, useEffect} from "react";
import api from "../api";
import '../styles/RecipeForm.css';

function RecipeForm({open, close, refresh}) {

    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [process, setProcess] = useState("")
    const [tags, setTags] = useState("")
    const [notes, setNotes] = useState("")

    const createRecipe = (e) => {
        e.preventDefault()
        close();
        api.post("/recipes_api/recipes/",
        {
            name: name,
            description: description,
            ingredients: ingredients,
            process : process,
            tags : tags,
            notes : notes
          }
        ).then(function(res){
          alert("Recipe added successfully");
          refresh();
        }).catch(function(error){
          alert("Error while creating recipe" + error);
        })
        clearForm();
    };

    const clearForm = () => {
      setName(""); 
      setDescription("");
      setIngredients("");
      setProcess("");
      setTags("");
      setNotes("");
    }

    const closeAndClear = () => {
      close();
      clearForm();
    }

    if(!open) return null;

    return (
        <div className = "overlay">
        <div className = "create-recipe-container">
        <div className="close-icon" onClick={closeAndClear}>&times;</div>
        <form onSubmit={createRecipe} className="create-recipe-form">
        <h1>Add Recipe</h1>
        <div className="recipe-input-field">
        <label for="name">Name</label>
        <input className="recipe-form-input" id= "name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Give your recipe a name..."/>
        </div>
        <div className="recipe-input-field">
        <label for="desc">Description</label>
        <textarea rows="5"  className="recipe-form-input" id="desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="How to describe your recipe?..." />
        </div>
        <div className="recipe-input-field">
        <label for="ingredients">Ingredients</label>
        <textarea rows="5" className="recipe-form-input" id= "ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="What ingredients are needed?..." />
        </div>
        <div className="recipe-input-field">
        <label for="process">Process</label>
        <textarea rows="5" className="recipe-form-input" id="process" value={process} onChange={(e) => setProcess(e.target.value)} placeholder="How to make the recipe?..." />
        </div>
        <div className="recipe-input-field">
        <label for="tags">Tags</label>
        <input className="recipe-form-input" id="tags" type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Comma-separated tags for the recipe eg. 'Vegetarian, Vegan'..." />
        </div>
        <div className="recipe-input-field">
        <label for="notes">Notes</label>
        <textarea rows="5" className="recipe-form-input" id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Important notes to remember..." />
        </div>
        <div className="button-container"> <button className="form-button" type="submit">Create</button></div>
    </form>
    </div>
    </div>
    );

}

export default RecipeForm;