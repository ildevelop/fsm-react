import '@testing-library/jest-dom';
import { UserProvider } from '../context/UserContext';
import { fireEvent, render, screen, RenderResult, waitFor } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PlayerSelection from '../pages/PlayerSelection/PlayerSelection';
import PresentSelection from '../pages/PresentSelection/PresentSelection';
import { apiService } from '../services/api';
import { presentMockAPI } from '../__mocks__/presentsMock';

jest.mock('../services/api', () => ({
  apiService: {
    getPresents: jest.fn(), // Create a Jest mock function for getPresents
  },
}));

const customRender = (initialEntries = ['/player-selection']): RenderResult => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <UserProvider>
        <Routes>
          <Route path="/player-selection" element={<PlayerSelection />} />
          <Route path="/present-selection" element={<PresentSelection />} />
        </Routes>
      </UserProvider>
    </MemoryRouter>
  );
};

describe('Navigation Tests', () => {
  beforeEach(() => {
    customRender();
    (apiService.getPresents as jest.Mock).mockResolvedValue(presentMockAPI);
  });
  it('should render the player page when navigating to /player-selection', () => {
    expect(screen.getByTestId('playerPage')).toBeInTheDocument();
  });
  it('should navigate to /present-selection after entering a name and clicking submit', async () => {
    // Detect the input with data-testid="player-id"
    const input = screen.getByTestId('player-id');
    expect(input).toBeInTheDocument();

    // Type a name into the input field
    fireEvent.change(input, { target: { value: 'John Doe' } });

    // Detect the submit button and click it
    fireEvent.click(screen.getByText('Next'));

    // Wait for the API response and navigation to /present-selection page
    await waitFor(() => {
      expect(screen.getByTestId('presentPage')).toBeInTheDocument();
    });
  });
});
