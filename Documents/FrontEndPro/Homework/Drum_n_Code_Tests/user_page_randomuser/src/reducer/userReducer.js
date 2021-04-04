import axios from 'axios';
import { fetchDataRejected, fetchDataPending, fetchDataFulfilled } from '../actions';
import { fetchStatus, path } from '../constants';
import { FETCH_DATA_FULFILLED, FETCH_DATA_PENDING, FETCH_DATA_REJECTED } from '../types';

export const userInitialState = {
  fetchStatus: fetchStatus.idle,
  data: {
    results: [],
  },
  fetchError: null,
};

export default function userReducer(state, action) {
  const { type, payload = null } = action;

  console.log('Action: ', type, 'Payload: ', payload);

  switch (type) {
    case FETCH_DATA_PENDING: {
      return {
        ...state,
        fetchStatus: fetchStatus.pending,
      };
    }

    case FETCH_DATA_FULFILLED: {
      return {
        ...state,
        fetchStatus: fetchStatus.fulfilled,
        data: payload,
      };
    }

    case FETCH_DATA_REJECTED: {
      return {
        ...state,
        fetchStatus: fetchStatus.rejected,
        fetchError: payload,
      };
    }

    default:
      return state;
  }
}

export const dispatchFetchData = async (dispatch) => {
  try {
    dispatch(fetchDataPending());

    const { data } = await axios.get(path.data);

    dispatch(fetchDataFulfilled(data));
  } catch (error) {
    dispatch(fetchDataRejected(error));
  }
};
