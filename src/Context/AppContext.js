import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [category, setCategory] = useState('All');

    const value = {
        category,
        setCategory
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};