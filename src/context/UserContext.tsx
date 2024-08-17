import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { apiService } from '../services/api';

export interface PresentI {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface UserContextType {
  step: number;
  playerName: string;
  selectedPresent: PresentI | null;
  presents: PresentI[];
  loading: boolean;
  error: string | null;
  setStep: (step: number) => void;
  setPlayerName: (name: string) => void;
  setSelectedPresent: (present: PresentI | null) => void;
  resetGame: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [playerName, setPlayerName] = useState('');
  const [selectedPresent, setSelectedPresent] = useState<PresentI | null>(null);
  const [presents, setPresents] = useState<PresentI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPresents = useCallback(async () => {
    if (presents.length > 0) return;
    try {
      setLoading(true);
      setError(null);
      const fetchedPresents = await apiService.getPresents();
      setPresents(fetchedPresents);
    } catch (err) {
      setError('Failed to fetch presents. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [presents.length]);

  useEffect(() => {
    if (step === 2) {
      fetchPresents();
    }
  }, [step]);

  const resetGame = () => {
    setStep(1);
    setPlayerName('');
    setSelectedPresent(null);
  };

  return (
    <UserContext.Provider
      value={{
        step,
        playerName,
        selectedPresent,
        presents,
        loading,
        error,
        setStep,
        setPlayerName,
        setSelectedPresent,
        resetGame,
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
