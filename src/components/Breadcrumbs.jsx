import { NavLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = "";
    const crumbs = location.pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb) => {
            currentLink += `/${crumb}`;
            return (
                <li className="breadcrumb-item">
                    <NavLink to={currentLink}>{crumb}</NavLink>
                </li>
            );
        });

    //console.log(crumbs);

    return (
        <nav aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">{crumbs}</ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
