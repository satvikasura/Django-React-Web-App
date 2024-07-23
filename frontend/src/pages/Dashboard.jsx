import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import RecipeForm from "../components/RecipeForm.jsx";
import Recipe from "../components/Recipe.jsx"
import api from "../api";
import '../styles/RecipeCard.css';
import NavBar from "../components/NavBar.jsx";

function Dashboard() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([])
    const [popupOpen, showPopup] = useState(false)
 
    useEffect(() => {
        getRecipes();
    }, []);
 
    const getRecipes = () => {
        api.get("/recipes_api/recipes/")
        .then((res) => res.data)
        .then((data) => {
            setRecipes(data);
        })
        .catch((err) => alert(err));
    };

    const deleteRecipe = (id) => {
        api.delete(`/recipes_api/recipes/delete/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Recipe deleted!");
            else alert("Failed to delete recipe.");
            getRecipes();
        })
        .catch((error) => alert(error));
    };

    const logout = async (e) => {
        e.preventDefault();
        navigate('/logout');
    }

    const addRecipe = () => {
        showPopup(true);
    }

    return (
        <>
        <NavBar logout={logout} add={addRecipe} refresh={getRecipes}/>
        <div className= "recipes">
                {recipes.map((recipe) => (
                    <Recipe recipe={recipe} onDelete={deleteRecipe} key={recipe.id} />
                ))}
        </div>
        <RecipeForm open = {popupOpen} close = {() => showPopup(false)} refresh={getRecipes}/>
        </>
    );
}

export default Dashboard;