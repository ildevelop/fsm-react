import styled, { keyframes } from 'styled-components';
import { Title } from '../../styles/GlobalTheme';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #a777e3, #6e8efb);
  padding: 2rem;
`;

export const TitlePresent = styled(Title)`
  color: white;
`;

export const PresentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const PresentCard = styled.div<{ selected: boolean }>`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  ${({ selected }) =>
    selected &&
    `
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const PresentImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const PresentTitle = styled.h3`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const PresentPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const PresentDescription = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: #666;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  background: #a777e3;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  display: block;
  margin: 0 auto;

  &:hover {
    background: #9166d9;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const SelectedLabel = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonCard = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 400px;
  border-radius: 10px;
  height: 330px;
  animation: ${shimmer} 1.5s linear infinite;
`;

export const LoadingText = styled.p`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-top: 2rem;
`;
