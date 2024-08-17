import { FSM } from 'fsm-libts';

export const fsm = new FSM('initial', {
  initial: { on: { FETCH: 'loading' } },
  loading: { on: { SUCCESS: 'processing', FAILURE: 'error' } },
  processing: { on: { SUCCESS: 'success', FAILURE: 'error' } },
  success: { on: { RESET: 'initial' } },
  error: { on: { RETRY: 'loading' } },
});

export const fsmSteps = {
  initial: 'initial',
  loading: 'loading',
  processing: 'processing',
  success: 'success',
  error: 'error',
};

export const fsmEventName = {
  fetch: 'FETCH',
  success: 'SUCCESS',
  failure: 'FAILURE',
  reset: 'RESET',
  retry: 'RETRY',
};
