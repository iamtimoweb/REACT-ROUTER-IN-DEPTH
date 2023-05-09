import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export const careerDetailLoader = ({ params }) => {
    const { id } = params;

    // Get all the careers from the endpoint
    const response = fetch(`http://localhost:5000/careers/${id}`).then((res) => {
        if (!res.ok) {
            throw new Error(`Error : ${res.status}, Failed to load data from endpoint`);
        }
        return res.json();
    });

    return response;
};

const CareerDetail = () => {
    const career = useLoaderData();

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto">
                    <h3 className="pb-3 mb-3 border-bottom border-2">Career Details for {career.title}</h3>
                    <p className="mb-4">Starting salary: {career.salary}</p>
                    <p className="mb-4">Location: {career.location}</p>
                    <Link to={'/careers'} className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default CareerDetail;
