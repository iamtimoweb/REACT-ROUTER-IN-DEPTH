import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
    const error = useRouteError();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h3 className="pb-3 mb-3 border-bottom border-2">Error</h3>
                    <p className="mb-4">{error.message}</p>
                    <p className="text-center">
                        Go back to{" "}
                        <Link to={"/careers"} className="btn btn-primary">
                            Careers
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareersError;
