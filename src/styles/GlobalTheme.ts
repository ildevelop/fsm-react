import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
`;

export const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 90%;
  max-width: 400px;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #a777e3;
    outline: none;
  }
`;

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 0.8rem;
  background: #6e8efb;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #5c7cfa;
  }
  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    background:#6e8efbb3;
      &:hover {
    background: #6e8efbb3;
  }
  `}
`;

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
