import { NavLink } from "react-router-dom";

function NavigationLink({ path, activeClass, labelNav}) {
    return(
        <li>
            <NavLink
                to={path}
                exact activeClassName={activeClass}

            >{labelNav}

            </NavLink>
        </li>
    );
}

export default NavigationLink;