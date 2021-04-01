import { fetchStatus } from '../constants';
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
      const fetchedData = payload;

      return {
        ...state,
        fetchStatus: fetchStatus.fulfilled,
        data: fetchedData,
      };
    }

    case FETCH_DATA_REJECTED: {
      const fetchError = payload;

      return {
        ...state,
        fetchStatus: fetchStatus.rejected,
        fetchError,
      };
    }

    default:
      return state;
  }
}
