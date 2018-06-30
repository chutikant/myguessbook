import Cookies from 'universal-cookie';

//if many component are interested about Is user login
//you have to cteate action

export function loginSuccess(token) {
    return (dispatch) => {
        const cookies = new Cookies()
        cookies.set('token', token, {path: '/'});
       
        dispatch(
            {
                type: 'LOGIN_SUCCESS',
                token
            })
    }
}

export function logout() {
    return (dispatch) => {
        const cookies = new Cookies()
        cookies.remove('token',  {path: '/'});
       
        dispatch(
            {
                type: 'LOGOUT',
            })
    }
}