import { ADD_USER, REMOVE_USER } from "./types"

const defaultState = {
  users: [],
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] }
    // state.users.unshift(action.payload) ////// ????????????
    case REMOVE_USER:
      return { ...state, users: state.users.filter(users => users.id !== action.payload) }
    default:
      return state
  }
}

export const addUserAction = (payload) => ({ type: ADD_USER, payload })
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload })



