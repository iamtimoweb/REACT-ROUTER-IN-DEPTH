import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="pb-3 mb-3 border-bottom border-2">Website Help?</h3>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis reprehenderit doloremque accusamus blanditiis. Quae et aliquid iure incidunt, nesciunt asperiores sequi ea cumque provident sint? Fugit maiores vitae id cumque.</p>

                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link  me-2" aria-current="page" to="faq">
                                View FAQ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HelpLayout;
