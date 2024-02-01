import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <section className="sidebar-mobile">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <CiMenuBurger onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-header">
            <Link to="#" className="close-button">
              <IoCloseOutline onClick={showSidebar} />
            </Link>
          <div className="nav-menu-title">
            <h4>Personal Projects</h4>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
