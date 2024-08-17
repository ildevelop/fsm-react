import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { apiService } from '../services/api';
import { fsm, fsmEventName, fsmSteps } from '../utils/consts';

export interface PresentI {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface UserContextType {
  step: number;
  selectedPresent: PresentI | null;
  presents: PresentI[];
  loading: boolean;
  error: boolean;
  setStep: (step: number) => void;
  setSelectedPresent: (present: PresentI | null) => void;
  resetGame: () => void;
  handleEvent: (eventName: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [selectedPresent, setSelectedPresent] = useState<PresentI | null>(null);
  const [presents, setPresents] = useState<PresentI[]>([]);
  const [state, setState] = useState(fsm.getState());
  const fetchPresents = useCallback(async () => {
    if (presents.length > 0) return;
    try {
      handleEvent(fsmEventName.fetch);
      const fetchedPresents = await apiService.getPresents();
      handleEvent(fsmEventName.success);
      setPresents(fetchedPresents);
    } catch (err) {
      console.log('Error fetching presents', err);
      handleEvent(fsmEventName.failure);
    }
  }, [presents.length]);

  const handleEvent = (event: string) => {
    try {
      fsm.send(event);
      setState(fsm.getState());
    } catch (error) {
      console.error(error);
    }
  };
  // console.log('FSMState', state);
  useEffect(() => {
    if (step === 2) {
      fetchPresents();
    }
  }, [step]);

  const resetGame = () => {
    setStep(1);
    localStorage.removeItem('selectedPlayer');
    handleEvent(fsmEventName.reset);
    setPresents([]);
    setSelectedPresent(null);
  };

  return (
    <UserContext.Provider
      value={{
        step,
        selectedPresent,
        presents,
        loading: state === fsmSteps.loading,
        error: state === fsmSteps.error,
        setStep,
        setSelectedPresent,
        resetGame,
        handleEvent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
