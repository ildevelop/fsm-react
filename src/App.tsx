// src/App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FSM } from 'fsm-libts';

const fsm = new FSM('idle', {
  idle: { on: { FETCH: 'loading' } },
  loading: { on: { SUCCESS: 'processing', FAILURE: 'error' } },
  processing: { on: { SUCCESS: 'success', FAILURE: 'error' } },
  success: { on: { RESET: 'idle' } },
  error: { on: { RETRY: 'loading' } },
});

const App: React.FC = () => {
  const [state, setState] = useState(fsm.getState());
  const [data, setData] = useState([]);

  const handleEvent = (event: string) => {
    try {
      fsm.send(event);
      setState(fsm.getState());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (state === 'loading') {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          setData(response.data);
          handleEvent('SUCCESS');
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          handleEvent('FAILURE');
        });
    }
    if (state === 'processing') {
      setTimeout(() => {
        const l = Math.random();
        console.log('LL', l);
        if (l) {
          handleEvent('SUCCESS');
        } else {
          handleEvent('FAILURE');
        }
      }, 1000);
    }
  }, [state]);

  return (
    <div>
      <h1>Current State: {state}</h1>
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
      )}
    </div>
  );
};

export default App;
