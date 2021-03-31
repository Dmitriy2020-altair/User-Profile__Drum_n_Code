import { fetchStatus } from '../constants';

export const userInitialState = {
  fetchStatus: fetchStatus.idle,
  data: {},
  fetchError: null,
};
