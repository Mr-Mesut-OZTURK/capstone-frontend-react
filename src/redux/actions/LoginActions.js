import {
    LOGIN_IS_SUCCESS,
    LOGOUT_IS_SUCCESS
} from './ActionTypes'


export const LoginAction = (data) => {
    return {
        type: LOGIN_IS_SUCCESS,
        payload: data
    }
}

export const LogoutAction = () => {
    return {
        type: LOGOUT_IS_SUCCESS,
        payload: ''
    }
}


