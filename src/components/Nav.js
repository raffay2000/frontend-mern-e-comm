import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Nav.css"
export default function Nav() {
  const auth = localStorage.getItem('auth');
  const navigate = useNavigate();
  const logoutBtn = () => {
    localStorage.removeItem('auth');
    navigate('/signup')
  }
  return (
    <div>
      <img className="microsoft-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9foAofD/tgDzRQB9ugAAo/Df6dCv0Xjz2dPzTBfzl4PznImz04CAx/H60oHS5vJ5xPH60Hn16dIAnvDz7u3z4t7n7dzzNADzkXurz3BwtQDzvrLM36zf6/Os2PL336z07d/7z3RN8WfWAAABg0lEQVR4nO3cyVLCYBCFURwCkXlygDBFUBTf//3cSGIVf5WrDi7O9wJdp3p/Wy1JkvSrLLzqVDu8FHAzjW57JrZ34+hSH5yWg9jK187PrXx/GMZ2GF9+MZsObmKbzSvhZHgb25CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwUWE5i21QC/fB86Xp/dLt/DG4t/MGbf7+FNxkl9jZzTrR1TvCeXjJIWFJkv7uIbzqVDe8LAE8Lp+D+zgTu5/FS2zFKUFcrEex9ZaV8Ksf3Sol7N3FNqqFRf8+NkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsJmhetebOtr75dmi+iO1anTKrrNJbDRsvCuDJQk6Z/1DSzvYqEfRCNJAAAAAElFTkSuQmCC" alt="Logo" />
        {auth ? (
          <>
      <ul className='nav-bar'
      >
        <li>
          <Link  to="/">Products</Link>
        </li>
        <li>
          <Link to="/add-products">AddProducts</Link>
        </li>
        <li>
          <Link to="/update-products">Update Products</Link>
        </li>
        <li>
           <Link to="/signup" onClick={logoutBtn}>Logout ({JSON.parse(auth).name})</Link>
        </li>
      </ul>
        </>
        ):(
          <>
          <ul className='nav-bar nav-right'>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        </ul>
          </>
        )}
    </div>
  );
}
