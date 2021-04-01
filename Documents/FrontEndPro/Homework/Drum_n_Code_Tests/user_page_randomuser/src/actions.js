import { FETCH_DATA_FULFILLED, FETCH_DATA_PENDING, FETCH_DATA_REJECTED } from './types';

export const fetchDataPending = () => ({ type: FETCH_DATA_PENDING });

export const fetchDataFulfilled = (data) => ({ type: FETCH_DATA_FULFILLED, payload: data });

export const fetchDataRejected = (error) => ({ type: FETCH_DATA_REJECTED, payload: error });
