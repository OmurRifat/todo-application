// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import DetailsModal from './DetailsModal';

// eslint-disable-next-line react/prop-types
const Employee = ({ employee }) => {
    // eslint-disable-next-line react/prop-types
    const { name, imgUrl, designation } = employee;
    // eslint-disable-next-line no-unused-vars
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="card card-side bg-tertiary bg-opacity-70 shadow-xl p-2">
            <figure><img className=' rounded-full w-36' src={ `${imgUrl}` } alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ name }</h2>
                <p>{ designation }</p>
                <div className="card-actions justify-end">
                    <button
                        type="button"
                        onClick={ openModal }
                        className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        View Details
                    </button>
                    {
                        isOpen && <DetailsModal
                            isOpen={ isOpen }
                            setIsOpen={ setIsOpen }
                            employee={ employee }
                        ></DetailsModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default Employee;