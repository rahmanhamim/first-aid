
const initialState = {
    courses: [],
    loading: true,
}

export const coursesReducer = (state = initialState, action) => {
    if (action.type === 'FETCH_COURSES') {
        return {
            courses: action.payload,
            loading: false
        }
    }
    else {
        return state;
    }
}