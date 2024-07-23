import '../styles/Navigation.css';
import logout_icon from '../assets/logout.png';
import add_icon from '../assets/add.png';
import refresh_icon from '../assets/refresh.png';
import cook_icon from '../assets/cook.png';

function NavBar({logout, add, refresh}) {
     return (
        <nav className = "navbar">
            <div className="navdiv">
                <div className="left-section-nav">
                <div className="app-logo">RecipeDiary</div>
                <img className = "logo-img" src= {cook_icon} alt=""/>
                </div>
                <div className="right-section-nav">             
                { logout != null? <div className ="logout"><img className="menu-icon" src= {logout_icon} alt= "" onClick={(e) => logout(e)}/></div>
                : <></>
                }
                { refresh != null? <div className ="refresh"><img className="menu-icon" src= {refresh_icon} alt= "" onClick={() => refresh()}/></div>
                : <></>
                }
                { add != null? <div className ="add"><img className="menu-icon" src= {add_icon} alt= "" onClick={() => add()}/></div>
                : <></>
                }
                </div>
            </div>
        </nav>
     );
}

export default NavBar;