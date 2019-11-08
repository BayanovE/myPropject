import * as types from "./constants"

function action(type, payload = {}) {
    return { type, payload }
  }

export const login = (login, pass) => action(types.LOGIN, {login, pass});

export const logut = () => action(types.LOGOUT);

export const signIn = (login, pass) => action(signIn, {login, pass});