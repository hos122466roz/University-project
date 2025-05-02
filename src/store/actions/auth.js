import axios from "axios";

export const AUTH_START = () => {
  return {
    type: "AUTH_START",
  };
};
export const authSucess = (data) => {
  return {
    type: "AUTH_SUCCESS",
    data: data,
  };
};
export const authFail = (err) => {
  return {
    type: "AUTH_FAIL",
    err: err,
  };
};
export const AUTH = (data) => {
  const { email, username, password } = data;
  return (dispatch) => {
    dispatch(AUTH_START());
    axios
      .post("/register", { email, username, password })
      .then((result) => {
        dispatch(authSucess(result.data));
      })
      .catch((e) => {
        dispatch(authFail());
        console.log(e);
      });
  };
};
export const authLogin = (data) => {
  const { username, password } = data;
  return (dispatch) => {
    dispatch(AUTH_START());
    axios
      .post("/login", { username, password })
      .then((result) => {
        dispatch(authSucess(result.data));
      })
      .catch((e) => {
        // if (e.response.status){

        //   if (e.response.status === 400) {
        //     dispatch(authFail("نام کاربری درست نمی باشد"));
        //   }
        //   if (e.response.status === 422) {
        //     dispatch(authFail("رمز عبور  درست نمی باشد"));
        //   }
        // }
        console.log(e)
        dispatch(authFail())
      });
  };
};

export const AUTH_PROFILE_SUCCESS = (email, id) => {
  return {
    type: "AUTH_PROFILE_SUCCESS",
    email: email,
    id: id,
  };
};
export const AUTH_PROFILE = () => {
  return (dispatch) => {
    axios
      .get("/profile")
      .then((result) => {
        dispatch(AUTH_PROFILE_SUCCESS(result.data.email, result.data.id));
      })
      .catch((e) => {
        dispatch(authFail());
      });
  };
};

export const AUTH_LOGOUT_TYPE = () => {
  return {
    type: "AUTH_LOGOUT_TYPE",
  };
};
export const AUTH_LOGOUT = () => {
  return (dispatch) => {
    axios
      .post("/logout")
      .then((result) => {
        dispatch(AUTH_LOGOUT_TYPE());
      })
      .catch((e) => {
        dispatch(authFail());
        console.log(e);
      });
  };
};
