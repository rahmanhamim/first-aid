const initialState = {
 quiz: [],
 finalAnswers: [],
 loading: true,
};

export const quizReducer = (state = initialState, action) => {
 switch (action.type) {
  case "FETCH_QUIZ":
   return {
    ...state,
    quiz: action.payload,
    loading: false,
   };
  case "SUBMIT_QUIZ":
   return {
    ...state,
    finalAnswers: action.payload,
   };
  default:
   return state;
 }
};
