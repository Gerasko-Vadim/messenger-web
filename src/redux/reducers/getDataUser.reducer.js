import { GET_DATA_USER } from "../constants/constants";


const initialState = {
    data:{}
}

const getDataUser = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_USER:
            return { 
                ...state, data: action.payload
            };

        default: 
            return state
    }
}
export default getDataUser;