import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export const careersLoader = () => {
    // Get all the careers from the endpoint
   const response = fetch("http://localhost:5000/careers").then((res) => {
        if (!res.ok) {
            throw new Error(`Error : ${response.status}, Failed to load data from endpoint`);
        }
        return res.json();
    });
    return response
};

const Careers = () => {
    // Getting the careers from the endpoint
    const careers = useLoaderData();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {careers &&
                                    careers.map((career) => (
                                        <tr key={career.id}>
                                            <th scope="row">{career.id}</th>
                                            <td>{career.title}</td>
                                            <td>{career.salary}</td>
                                            <td>{career.location}</td>
                                            <td>
                                                <Link className="btn btn-sm btn-success" to={career.id.toString()}>View</Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
