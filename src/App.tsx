import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// // Lazy load components
const PlayerSelection = lazy(() => import('./pages/PlayerSelection/PlayerSelection'));
const PresentSelection = lazy(() => import('./pages/PresentSelection/PresentSelection'));
const ThanksPage = lazy(() => import('./pages/ThanksPage/ThanksPage'));

import { GlobalStyle } from './styles/GlobalTheme';
import { UserProvider } from './context/UserContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

import NotFound from './pages/NotFound';

const App: React.FC = () => {
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </UserProvider>
  );
};

export default App;
