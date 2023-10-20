import '@testing-library/jest-dom';
import { Store } from '../src/core/store';
import { act } from '@testing-library/react';

beforeEach(() => {
  Store.toasts = [];
  jest.useFakeTimers();
});

afterEach((done) => {
  act(() => {
    jest.runAllTimers();
    jest.useRealTimers();
    done();
  });
});

const waitTime = (time: number) => {
  act(() => {
    jest.advanceTimersByTime(time);
  });
};

export { waitTime };
