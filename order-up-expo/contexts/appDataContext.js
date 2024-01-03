import { createContext } from 'react';

const appDataContext =() => {
    return (createContext({
        user: {},
    }))
};

export {appDataContext}
