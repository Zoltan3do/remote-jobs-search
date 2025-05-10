import { FETCH } from "../actions"


const initialState = {
    searchResults: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                searchResults: [action.payload]
            }
        default:
            return state
    }
}

export default searchReducer