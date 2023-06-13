// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Employee = ({ employee }) => {
    // eslint-disable-next-line react/prop-types
    const { name, imgUrl, designation } = employee;
    // console.log(imgUrl);
    return (
        <div className="card card-side bg-secondary bg-opacity-40 shadow-xl">
            <figure><img className=' rounded-full w-36' src={ `${imgUrl}` } alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ name }</h2>
                <p>{ designation }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Employee;