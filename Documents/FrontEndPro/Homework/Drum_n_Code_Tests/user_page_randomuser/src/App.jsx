import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { fetchDataFulfilled, fetchDataPending, fetchDataRejected } from './actions';
import { fetchStatus, path } from './constants';
import userReducer, { userInitialState } from './reducer/userReducer';
import './App.scss';

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
      <ul>
        {data.results.map((user) => (
          <li>
            <h5>
              {user.name.first}
              {' '}
              { user.name.last }
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
