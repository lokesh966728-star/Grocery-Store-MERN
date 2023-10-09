import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    let link = `https://grocery-store-theta.vercel.app/api/v1/login`;
    let response = await fetch(link, {
      withCredentials: true,
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    let data = await response.json();

    if (response.status === 401) {
      return dispatch({ type: LOGIN_FAIL, payload: data.message });
    }

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    let link = "https://grocery-store-theta.vercel.app/api/v1/register";
    let response = await fetch(link, {
      withCredentials: true,
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "*/*",
        type: "formData",
      },
      body: userData,
    });

    const data = await response.json();

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    let link = "https://grocery-store-theta.vercel.app/api/v1/me";
    let response = await fetch(link, {
      withCredentials: true,
      credentials: "include",
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });

    if (response.status === 401 || response.status === 204) {
      throw dispatch({ type: LOAD_USER_FAIL, payload: response.message });
    }

    const data = await response.json();

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    // await axios.get(`/api/v1/logout`);

    await fetch("https://grocery-store-theta.vercel.app/api/v1/logout", {
      withCredentials: true,
      credentials: "include",
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    let link = "https://grocery-store-theta.vercel.app/api/v1/me/update";
    let response = await fetch(link, {
      withCredentials: true,
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "*/*",
        type: "formData",
      },
      body: userData,
    });

    let data = await response.json();

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
