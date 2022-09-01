import React from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = React.createContext();
const AuthProvider = (props) => {
    // context api to share data
    const {children} = props;
    const allContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value = {allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;