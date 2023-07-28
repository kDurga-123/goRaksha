import {
    GET_ALL_DISEASES_REQUEST,
    GET_ALL_DISEASES_SUCCESS,
    GET_ALL_DISEASES_FAILURE,
    
  } from "./ActionType";
  
  import axios from "axios";
  
  export const getAllDiseasesRequest = () => ({
    type: GET_ALL_DISEASES_REQUEST,
  });
  
  export const getAllDiseasesFailure = () => ({
    type: GET_ALL_DISEASES_FAILURE,
  });
  
  export const getAllDiseasesSuccess = (payload) => ({
    type: GET_ALL_DISEASES_SUCCESS,
    payload,
  });
  
  export const getAllDiseases = () => (dispatch) => {
    dispatch(getAllDiseasesRequest());
    axios
      .get("http://localhost:8080/medicine/search?query=fever")
      .then((res) => dispatch(getAllDiseasesSuccess(res.data)))
      .catch(() => dispatch(getAllDiseasesFailure()));
  };
  
  
  
  
  