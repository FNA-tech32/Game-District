import Link from "next/link";
import { useState } from "react";
import { About, Blog, Cases, Home, Pages } from "./headers/Menus";

const MobileHeader = ({ logo, className, headerClass }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`${
        headerClass ? headerClass : "header-navigation navigation-blue-light"
      } breakpoint-on d-block d-xl-none`}
    >
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/" className="brand-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={`assets/images/logo/logo-${logo ? logo : 1}.png`}
                alt="Game District Logo"
                style={{ height: '35px', width: 'auto' }}
              />
              <span style={{ fontSize: '20px', fontWeight: '700', color: '#1B1B20', letterSpacing: '0.5px', fontFamily: '"Rajdhani", sans-serif' }}>
                Game <span style={{ color: '#fd4a18' }}>District</span>
              </span>
            </Link>
          </div>
          <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
            {/* Navbar Close */}
            <div
              className={`navbar-close ${className ? className : ""}`}
              onClick={() => setToggle(false)}
            >
              <i className="far fa-times" />
            </div>

            {/* Main Menu */}
            <nav className="main-menu">
              <ul>
                <li className="menu-item" onClick={() => setToggle(false)}>
                  <Link href="/">Home</Link>
                </li>
                <li className="menu-item" onClick={() => setToggle(false)}>
                  <Link href="/about">About Us</Link>
                </li>
                <li className="menu-item" onClick={() => setToggle(false)}>
                  <Link href="/service">Services</Link>
                </li>
                <li className="menu-item" onClick={() => setToggle(false)}>
                  <Link href="/learning-hub">Learning Hub</Link>
                </li>
                <li className="menu-item" onClick={() => setToggle(false)}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right-nav">
            <ul>
              <li className="nav-button">
                <a
                  href="https://wa.me/447863050300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-btn"
                >
                  Get in Touch
                </a>
              </li>
              <li className="navbar-toggle-btn">
                <div
                  className={`navbar-toggler ${toggle ? "active" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
