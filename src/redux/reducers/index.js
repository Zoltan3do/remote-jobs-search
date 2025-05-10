import { ADD, REMOVE } from "../actions"

const initialState = {
    favourites: []
}


const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case REMOVE:
            return {
                ...state,
                favourites: state.favourites.filter((f) => f !== action.payload)
            }
        default:
            return state
    }
}

export default mainReducer;