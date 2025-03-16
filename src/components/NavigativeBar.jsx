import { Link } from "react-router-dom";
import '../css/NavigationBar.css'

function NavigationBar() {
    return (
        <nav className="navigation-bar">

            <div className="navigation-bar-brand">
                <Link to='/'>
                    Movie App
                </Link>
            </div>

            <div className="navigation-bar-links">
                <Link to='/' className="navigation-link">
                    Home
                </Link>
                <Link to='/favourites' className="navigation-link">
                    Favourites
                </Link>
            </div>
            
        </nav>
    )
}


export default NavigationBar