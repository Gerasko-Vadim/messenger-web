import {GET_ALL_LIST_GROUPS} from "../constants/constants"

const initialState = {
    groups: []
};

const getAllGroups = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_LIST_GROUPS:
            return { 
                ...state, groups: action.payload
            };

        default: 
            return state
    }
}
export default getAllGroups;