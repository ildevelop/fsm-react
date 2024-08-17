import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

import { useUserContext } from '../../context/UserContext';
import { Message, PageContainer, Title } from './ThanksPage.styled';
import { Button } from '../../styles/GlobalTheme';

const ThanksPage: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const { playerName, selectedPresent, resetGame } = useUserContext();
  const navigate = useNavigate();
  const selectedPlayer = localStorage.getItem('selectedPlayer');

  const selectedName = selectedPlayer || playerName;
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStartAgain = () => {
    resetGame();
    navigate('/player-selection');
  };

  return (
    <PageContainer>
      <Confetti width={windowDimensions.width} height={windowDimensions.height} recycle={false} numberOfPieces={200} />
      <Title>Thank You!</Title>
      <Message>
        {selectedName}, you've selected {selectedPresent?.title}!
        <br />
        We hope you enjoy your gift.
      </Message>
      <Button onClick={handleStartAgain}>Start Again</Button>
    </PageContainer>
  );
};

export default ThanksPage;
