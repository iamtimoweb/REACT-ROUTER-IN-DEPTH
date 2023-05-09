import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="pb-3 mb-3 border-bottom border-2">Careers</h3>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default CareersLayout;
