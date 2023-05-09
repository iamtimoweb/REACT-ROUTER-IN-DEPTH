import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h3 className="pb-3 mb-3 border-bottom border-2">Page Not Found</h3>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam a sed hic dicta, architecto fugiat.</p>
                    <p className="text-center">
                        Go back to <Link to={'/'} className="btn btn-primary">Home Page</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
