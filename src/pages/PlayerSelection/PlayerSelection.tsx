// src/components/PlayerSelection.tsx
import React, { FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { Button, Card, Form, PageContainer, Input, Title } from '../../styles/GlobalTheme';

const PlayerSelection: React.FC = () => {
  const { setStep } = useUserContext();
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState(localStorage.getItem('selectedPlayer') || '');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerName) {
      setStep(2);
      localStorage.setItem('selectedPlayer', playerName);
      navigate('/present-selection');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <PageContainer>
      <Card>
        <Title>Enter your name</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Ilya" value={playerName} onChange={handleChange}></Input>
          <Button type="submit" disabled={!playerName.length}>
            Next
          </Button>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default PlayerSelection;
