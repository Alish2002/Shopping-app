import {Outlet, Link} from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <nav>
            <div className="header" >
                <p className="logo">FitFeet Fashions</p>
            <ul >
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/Blogs">Blogs</Link>
                </li>
                <li>
                    <Link className="link" to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link className="link" to="/Aboutus">About</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>

            </ul>
            
            </div>
            
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout;