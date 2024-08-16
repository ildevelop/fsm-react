import { FSM } from 'fsm-library';

describe('FSM Library', () => {
  it('should transition from idle to loading state', () => {
    const fsm = new FSM('idle', {
      idle: { on: { FETCH: 'loading' } },
      loading: { on: { SUCCESS: 'success', FAILURE: 'error' } },
    });

    expect(fsm.getState()).toBe('idle');
    fsm.send('FETCH');
    expect(fsm.getState()).toBe('loading');
  });

  it('should transition from loading to success state', () => {
    const fsm = new FSM('loading', {
      loading: { on: { SUCCESS: 'success', FAILURE: 'error' } },
      success: { on: { RESET: 'idle' } },
    });

    fsm.send('SUCCESS');
    expect(fsm.getState()).toBe('success');
  });

  it('should throw an error for an invalid event', () => {
    const fsm = new FSM('loading', {
      loading: { on: { SUCCESS: 'success', FAILURE: 'error' } },
    });

    expect(() => fsm.send('INVALID_EVENT')).toThrowError();
  });
});
