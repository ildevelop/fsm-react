import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load components
const PlayerSelection = lazy(() => import('./pages/PlayerSelection/PlayerSelection'));
const PresentSelection = lazy(() => import('./pages/PresentSelection/PresentSelection'));
const ThanksPage = lazy(() => import('./pages/ThanksPage/ThanksPage'));

import { GlobalStyle } from './styles/GlobalTheme';
import { UserProvider } from './context/UserContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// const fsm = new FSM('idle', {
//   idle: { on: { FETCH: 'loading' } },
//   loading: { on: { SUCCESS: 'processing', FAILURE: 'error' } },
//   processing: { on: { SUCCESS: 'success', FAILURE: 'error' } },
//   success: { on: { RESET: 'idle' } },
//   error: { on: { RETRY: 'loading' } },
// });

const App: React.FC = () => {
  // const [state, setState] = useState(fsm.getState());
  // const [data, setData] = useState([]);

  // const handleEvent = (event: string) => {
  //   try {
  //     fsm.send(event);
  //     setState(fsm.getState());
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (state === 'loading') {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => {
  //         setData(response.data);
  //         handleEvent('SUCCESS');
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //         handleEvent('FAILURE');
  //       });
  //   }
  //   if (state === 'processing') {
  //     setTimeout(() => {
  //       handleEvent('SUCCESS');
  //     }, 1000);
  //   }
  // }, [state]);

  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/player-selection" element={<PlayerSelection />} />
              <Route path="/present-selection" element={<PresentSelection />} />
              <Route path="/thanks" element={<ThanksPage />} />
              <Route path="/" element={<Navigate replace to="/player-selection" />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        {/* <h1>Current State: {state}</h1>
      {state === 'idle' && <button onClick={() => handleEvent('FETCH')}>Fetch Posts</button>}
      {state === 'loading' && <p>Loading...</p>}
      {state === 'processing' && <p>Processing...</p>}
      {state === 'success' && (
        <div>
          <h2>Posts:</h2>
          <ul>
            {data.map((post: { id: number; title: string }) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          <button onClick={() => handleEvent('RESET')}>Reset</button>
        </div>
      )}
      {state === 'error' && (
        <div>
          <p>Error occurred while fetching data</p>
          <button onClick={() => handleEvent('RETRY')}>Retry</button>
        </div>
      )} */}
      </Router>
    </UserProvider>
  );
};

export default App;
