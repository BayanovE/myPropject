import * as types from "./constants"

function action(type, payload = {}) {
    return { type, payload }
  }

export const index = () => action(types.INDEX);

export const load = (id) => action(types.LOAD, {id});

export const add = (data) => action(types.ADD, data);

export const update = (updatedData) => action(types.update, updatedData);

export const remove = (id) => action(types.REMOVE, {id});

