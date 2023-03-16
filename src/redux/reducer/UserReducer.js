import { GET_USER_CLIENT, SORT_BY_USERNAME } from "../types/typeUser"

const stateDefault = {
    listUser: [],
}

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_USER_CLIENT: {
            state.listUser = action.users
            return { ...state }
        }
        case SORT_BY_USERNAME: {
            state.listUser = action.users
            return { ...state }
        }
        default:
            return { ...state };
    }
}