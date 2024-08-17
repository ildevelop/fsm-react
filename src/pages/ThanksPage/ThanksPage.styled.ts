import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #a777e3, #6e8efb);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Message = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;
