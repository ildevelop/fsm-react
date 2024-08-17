import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PresentI, useUserContext } from '../../context/UserContext';
import {
  Button,
  LoadingText,
  PageContainer,
  PresentCard,
  PresentDescription,
  PresentImage,
  PresentPrice,
  PresentTitle,
  PresentsGrid,
  SelectedLabel,
  SkeletonCard,
  TitlePresent,
} from './PresentSelection.styled';
import { ErrorMessage, Title } from '../../styles/GlobalTheme';
import { fsmEventName } from '../../utils/consts';

const PresentSelection: React.FC = () => {
  const navigate = useNavigate();
  const { selectedPresent, setSelectedPresent, setStep, presents, loading, error, step, handleEvent } = useUserContext();

  const handlePresentSelect = (present: PresentI) => {
    setSelectedPresent(present);
  };

  useEffect(() => {
    if (step === 1) {
      navigate('/player-selection');
    }
  }, [step]);

  const handleFinish = () => {
    if (selectedPresent) {
      console.log(`selected ${selectedPresent.title}`);
      handleEvent(fsmEventName.success);
      setStep(3);
      navigate('/thanks');
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <TitlePresent>Select a Present</TitlePresent>
        <PresentsGrid>
          {[...Array(10)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </PresentsGrid>
        <LoadingText>Loading presents...</LoadingText>
      </PageContainer>
    );
  }
  if (error) {
    return (
      <PageContainer>
        <Title>Error</Title>
        <ErrorMessage>Failed to fetch presents. Please try again later.</ErrorMessage>
        <Button
          onClick={() => {
            window.location.reload();
          }}
        >
          Retry
        </Button>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <TitlePresent>Select a Present for {localStorage.getItem('selectedPlayer')}</TitlePresent>
      <PresentsGrid>
        {presents.map((present) => (
          <PresentCard key={present.id} selected={selectedPresent?.id === present.id} onClick={() => handlePresentSelect(present)}>
            <PresentImage src={present.image} alt={present.title} />
            <PresentTitle>{present.title}</PresentTitle>
            <PresentPrice>${present.price.toFixed(2)}</PresentPrice>
            <PresentDescription>{present.description.slice(0, 40)}...</PresentDescription>
            {selectedPresent?.id === present.id && <SelectedLabel>Selected</SelectedLabel>}
          </PresentCard>
        ))}
      </PresentsGrid>
      <Button onClick={handleFinish} disabled={!selectedPresent}>
        Finish
      </Button>
    </PageContainer>
  );
};

export default PresentSelection;
