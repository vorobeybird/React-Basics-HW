import React from "react";
import { NavLink } from "react-router-dom";
import { HEADER_ROUTES } from "../../routing/navigation";
import './Header.css'

const Header = ():JSX.Element => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };

    return (
        <nav className="navigation__container">
            {
                HEADER_ROUTES.map((route) => (
                    route.permission.concat('').includes('all')
                        ? <NavLink key={route.id} className="navigation__element" end to={route.url}>{route.title}</NavLink>
                        : ''
                ))
            }
        </nav>
    );
};

export default Header;