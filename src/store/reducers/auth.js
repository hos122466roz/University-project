const initialState = {
  data: null,
  loading: false,
  email: null,
  id: null,
  success: false,
  erorr:null
};
const suthStart = (state, action) => {
  return {
    ...state,
    ...{ loading: true },
  };
};
const suthSuccess = (state, action) => {
  return {
    ...state,
    ...{ loading: false, success: true, id: action.data },
  };
};
const suthProfileSuccess = (state, action) => {
  return {
    ...state,
    ...{ email: action.email, id: action.id },
  };
};
const suthFail = (state, action) => {
  return {
    ...state,
    ...{ loading: false ,erorr:action.err},
  };
};
const authlogout = (state, action) => {
  return {
    ...state,
    ...{ data: null, success: false, email: null, id: null },
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return suthStart(state, action);
    case "AUTH_SUCCESS":
      return suthSuccess(state, action);
    case "AUTH_PROFILE_SUCCESS":
      return suthProfileSuccess(state, action);
    case "AUTH_FAIL":
      return suthFail(state, action);
    case "AUTH_LOGOUT_TYPE":
      return authlogout(state, action);
    default:
      return state;
  }
};
