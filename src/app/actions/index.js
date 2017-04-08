import axios from "axios";
import { browserHistory } from "react-router";

const ROOT_URL = "http://localhost:3090";

export function signinUser( {email, password}) {
    return function (dispatch) {
        // submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, {
            email,
            password
        }).then((response) => {
            // if request is good...
            // Update state to indicate user is authenticated
            dispatch({type: "AUTH_USER"});
            // Save the JWT token
            localStorage.setItem('token', response.data.token);
            // redirect to the private route
            browserHistory.push('/resources');
        }).catch((err) => {
            // If request is bad...
            // Show an error for the user
            dispatch(authError('Bad login Info'));
        });
    };
}

export function logoutUser() {
     // Remove JWT token
    localStorage.removeItem('token');
    return {type: "UNAUTH_USER"};
}

export function authError(error) {
    return {
        type: "AUTH_ERROR",
        payload: error
    };
};
