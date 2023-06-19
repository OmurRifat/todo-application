// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [allEmployee, setAllEmployee] = useState([]);

    useEffect(() => {
        setAllEmployee(localStorage.getItem('employee') ? JSON.parse(localStorage.getItem('employee')) : []);
    }, [])
    const authInfo = { allEmployee, setAllEmployee };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;