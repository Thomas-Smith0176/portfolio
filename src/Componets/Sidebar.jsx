import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    function showSidebar() {
        setSidebar(!sidebar)
    };

    return (
        <section className="sidebar-mobile">
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <CiMenuBurger onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div>
                <Link to='#' className="menu-bars">
                    <IoCloseOutline onClick={showSidebar}/>
                </Link>
                </div>
            </nav>
        </section>
    )
};

export default Sidebar;