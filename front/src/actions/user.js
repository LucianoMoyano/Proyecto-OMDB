import axios from "axios";

const loggerUser = (user) => ({
  type: "LOGIN_USER",
  user,
});

export const crearUser = (email, password) => {
  return () => {
    return axios.post("/api/register", {
      email: email,
      password: password,
    });
  };
};
 
export const logginUser = (email, password) => (dispatch) => {
  return axios
    .post("/api/login", {
      email: email,
      password: password,
    })
    .then((res) => dispatch(loggerUser(res.data)));
};

export const loggoutUser = () => (dispatch) => 
  axios.post("/api/logout")
.then(res => res.data)
.then(() => dispatch(loggerUser({})));
;
