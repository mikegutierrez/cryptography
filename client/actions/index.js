import * as TYPES from '../constants/actionTypes';

/**
 * Error helper function
 */
const authError = (TYPE, error) => {
  return {
    type: TYPE,
    payload: error
  }
}

/**
 * Sign up user
 */
const signUpUser = (state) => {
  const { username, password, email } = state;
  return function (dispatch) {
    return fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password, email })
    })
      .then(response => response.json())
      .then(response => response.username ? dispatch({ type: TYPES.SIGNUP_SUCCESS }) : null)
      .catch(err => dispatch(authError(TYPES.SIGNUP_ERROR, 'Registration server error')));
  }
}

/**
 * Sign in user
 */
const signInUser = (props) => {
  const { username, password } = props;
  return function (dispatch) {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(response => response.username ? dispatch({ type: TYPES.AUTH_USER }) : null)
      .catch(err => dispatch(authError(TYPES.SIGNIN_ERROR, 'Authentication server error')));
  }
}

/**
 * Sign out user
 */
const signOutUser = () => {
  return function (dispatch) {
    fetch('/api/logout', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
    })
      .then(dispatch({ type: TYPES.UNAUTH_USER }))
  }
}

module.exports = {
  authError,
  signUpUser,
  signInUser,
  signOutUser
}
