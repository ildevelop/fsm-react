import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  color: white;
  text-align: center;
  padding: 20px;
`;

const ErrorMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const RetryButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: white;
  color: #ff6b6b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => (
  <ErrorContainer>
    <ErrorMessage>Oops! Something went wrong</ErrorMessage>
    <p>Error: {error.message}</p>
    <RetryButton onClick={resetErrorBoundary}>Try again</RetryButton>
  </ErrorContainer>
);

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        console.log('Error boundary reset');
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
