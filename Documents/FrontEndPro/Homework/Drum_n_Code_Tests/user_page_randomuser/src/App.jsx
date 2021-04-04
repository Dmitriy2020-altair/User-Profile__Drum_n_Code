import { useEffect, useReducer } from 'react';
import { fetchStatus } from './constants';
import userReducer, { dispatchFetchData, userInitialState } from './reducer/userReducer';
import './App.scss';
import UserProfile from './components/UserProfile';

function App() {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const { data } = state;

  useEffect(() => {
    dispatchFetchData(dispatch);
  }, []);

  return (
    <div>
      <div className="container" />
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
