import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { fetchDataFulfilled, fetchDataPending, fetchDataRejected } from './actions';
import { fetchStatus, path } from './constants';
import userReducer, { userInitialState } from './reducer/userReducer';
import './App.scss';
import UserProfile from './components/UserProfile';

function App() {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const { data } = state;

  useEffect(() => {
    dispatch(fetchDataPending());

    axios.get(path.data)
      .then(({ data: fetchedData }) => dispatch(fetchDataFulfilled(fetchedData)))
      .catch((error) => dispatch(fetchDataRejected(error)));
  }, []);

  return (
    <div>
      <div className="App" />
      {state.fetchStatus === fetchStatus.rejected && <p>{state.fetchError}</p>}
      {state.fetchStatus === fetchStatus.pending && <div className="progress" />}
      <ol>
        {data.results.map((user) => (
          <UserProfile user={user} />
        ))}
      </ol>
    </div>
  );
}

export default App;
