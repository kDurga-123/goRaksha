import {
    GET_ALL_DISEASES_FAILURE,
    GET_ALL_DISEASES_REQUEST,
    GET_ALL_DISEASES_SUCCESS,
    
  } from "./ActionType";
  
  export const initState = {
    diseasesData: [],
    error: "",
    loading: false,

  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case GET_ALL_DISEASES_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_ALL_DISEASES_FAILURE:
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_ALL_DISEASES_SUCCESS:
        return {
          ...state,
          error: "",
          loading: false,
          diseasesData: action.payload,
        };
      
      default:
        return state;
    }
  };
  
  export default reducer;