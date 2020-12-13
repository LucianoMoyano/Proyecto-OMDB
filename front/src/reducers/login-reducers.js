const inicialstate ={
    user: {},
}

export default (state = inicialstate, action) => {
    switch(action.type) {
      case "LOGIN_USER":
        return Object.assign({}, state, { user: action.user });
      default:
        return state;
    }
  } 