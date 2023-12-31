/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const DetailsModal = (props, ref) => {
    const [modalState, setModalState] = useState(false);
    const { employeeName, photoUrl, employeeDesignation, employeeEmail, employeeNumber, employeeId } = props.employee;
    useImperativeHandle(ref, () => ({
        openModal: () => setModalState(true)
    }))
    //get the data from local storage according to the name
    const taskData = JSON.parse(localStorage.getItem('task'));
    const task = taskData?.filter(task => task.employeeId == employeeId);
    if (!modalState) return null;
    return (
        <div
            className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0 backdrop-blur-sm bg-opacity-40  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-[#80bfb8] rounded-xl shadow">
                    <button
                        onClick={ () => setModalState(false) }
                        type="button"
                        className="absolute top-3  right-2.5 text-[red] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="flex justify-center ">
                        <div className="rounded-3xl overflow-hidden  shadow-2xl   my-15 ">
                            <img
                                src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png"
                                className="w-full h-40"
                                alt=""
                            />
                            <div className="flex justify-center -mt-32">
                                <img
                                    src={ photoUrl }
                                    className="rounded-full w-48 border-red-3 h-48 -mt-3"
                                    alt="profile"
                                />
                            </div>
                            <div className="text-right"></div>
                            <table className="w-full text-sm text-left">
                                <tbody>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Name:
                                        </th>

                                        <td className="text-black px-8 py-4 ">  { employeeName }</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Designation:
                                        </th>

                                        <td className="text-black px-8 py-4 "> { employeeDesignation }</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Email:
                                        </th>

                                        <td className="text-black px-8 py-4 ">{ employeeEmail }</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Phone:
                                        </th>

                                        <td className="text-black px-8 py-4 ">{ employeeNumber }</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Assigned Task:
                                        </th>

                                        <td className="text-black px-8 py-4 ">
                                            {
                                                task?.map(task => <li
                                                    key={ task.taskId }
                                                >{ task.taskName }</li>)
                                            }
                                            {
                                                task?.length > 0 ? <Link
                                                    type="button"
                                                    to="/tasks"
                                                    className=" bg-red-600 text-white font-bold py-1 px-4 rounded-xl mt-4"
                                                >
                                                    Edit
                                                </Link> :
                                                    <p>No task assigned.</p>
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default forwardRef(DetailsModal);