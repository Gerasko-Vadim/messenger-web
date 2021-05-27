import { GET_LIST_NEWS } from "../constants/constants"

const initialState = {
    news: []
};

const getAllNews = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_NEWS:
            return {
                ...state,
                news: [...action.payload]
            };

        default:
            return state
    }
}
export default getAllNews;