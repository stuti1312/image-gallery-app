import { GET_SEARCH } from "../constant/Constant";

const initialState = {
    APIData: []
}

const dataReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_SEARCH:
            return {
                ...state,
                APIData: action.payload
            }
        default: return state
    }
}

export default dataReducer;