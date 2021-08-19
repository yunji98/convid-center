import { handleActions } from 'redux-actions';
//import * as api from '../lib/api';
import axios from 'axios';

const GET_CENTERS = 'centers/GET_CENTERS';
const GET_CENTERS_SUCCESS = 'centers/GET_CENTERS_SUCCESS';
const GET_CENTERS_FAILURE = 'centers/GET_CENTERS_FAILURE';

export const getCenters = () => async (dispatch) => {
  dispatch({ type: GET_CENTERS });

  try {
    const response = await axios.get(
      `https://api.odcloud.kr/api/15077586/v1/centers?serviceKey=data-portal-test-key`,
    );
    console.log(response);
    dispatch({
      type: GET_CENTERS_SUCCESS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CENTERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const initialState = {
  loading: { GET_CENTERS: false },
  centers: null,
};

const centers = handleActions(
  {
    [GET_CENTERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CENTERS: true,
      },
    }),
    [GET_CENTERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CENTERS: false,
      },
      centers: action.payload,
    }),
    [GET_CENTERS_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CENTERS: false,
      },
    }),
  },
  initialState,
);

export default centers;