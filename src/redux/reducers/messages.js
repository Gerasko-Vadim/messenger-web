
import { GET_MESSAGES } from "../constants/constants"

const initialState = {
    messages: {}
};

const getMessages = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: {...action.payload}
            };

        default:
            return state
    }
}
export default getMessages;