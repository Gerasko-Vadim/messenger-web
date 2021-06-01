import { GET_LIST_CHATS } from "../constants/constants"

const initialState = {
    chats: []
};

const getAllChats = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_CHATS:
            return {
                ...state,
                chats: [...action.payload]
            };

        default:
            return state
    }
}
export default getAllChats;