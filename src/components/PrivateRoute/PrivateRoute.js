import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const { user,isLoading } = useAuth();
    // will show loading if user not loaded
    if(isLoading){
        return <div className="text-center"><Spinner animation="border" variant="danger"></Spinner></div>
    }
    return (
        <div>
            <Route 
            {...rest}
            render={({location}) =>
                user?.emailVerified ? (children) : (
                <Redirect 
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}></Redirect>
                )
            }
            >
            </Route>
        </div>
    );
};

export default PrivateRoute;