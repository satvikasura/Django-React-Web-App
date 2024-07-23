import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import '../styles/Form.css';
import username_icon from '../assets/person.png';
import password_icon from '../assets/password.png';

function Form() {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitValue, setSubmitValue] = useState('Login');

    const submit = async (e) => {
        e.preventDefault();
        if(submitValue === "Sign Up"){
            api.post(
                "/recipes_api/user/register/",
                {
                  username: username,
                  password: password
                }
              ).then(function(res){
                setSubmitValue('Login');
                alert("Registration completed successfully! You can now login!");
              }).catch(function(error){
                alert("Registration failed" + error);
              })
        } else {
            api.post(
                "/recipes_api/token/",
            {
                username: username,
                password: password
            }).then(function(res){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            }).catch(function(error){
                alert("Login failed:"+ error)
            });
        }
    }

    return(
        <div className = "container">
        <form onSubmit={submit} className=  "form-container">
        <h1>{submitValue}</h1>
        <div className = "inputs">
        <div className="input-field">
            <img src = {username_icon} alt=""/>
            <input className="form-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
         </div>
        <div className="input-field">
        <img src = {password_icon} alt =""/>
        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </div>
        </div>
        <div className="button-container"> <button className="form-button" type="submit">{submitValue}</button></div>
        {submitValue == "Sign Up"
        ? <div className = "navigable-links" onClick ={() => {setSubmitValue("Login")}}><span>Existing User? Click here to login!</span></div>
        : <div className = "navigable-links" onClick ={() => {setSubmitValue("Sign Up")}}><span>Not a registered user? Click here to register!</span></div>
        }
        
        
    </form>
    </div>
    );
}

export default Form;