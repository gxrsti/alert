/**
 * This module provides utility functions for testing asynchronous behavior and interactions with timers.
 * It includes a `waitTime` function for advancing timers, and sets up a testing environment.
 */

import '@testing-library/jest-dom';
import { Store } from '../src/core/store';
import { act } from '@testing-library/react';

/**
 * Resets the toasts in the store and configures fake timers before each test.
 */
beforeEach(() => {
  Store.toasts = [];
  jest.useFakeTimers();
});

/**
 * Advances timers and restores real timers after each test.
 * @param {function} done - A callback function to signal when the cleanup is complete.
 */
afterEach((done) => {
  act(() => {
    jest.runAllTimers();
    jest.useRealTimers();
    done();
  });
});

/**
 * Simulates the passage of time by advancing timers by the specified duration.
 * @param {number} time - The amount of time, in milliseconds, to advance the timers.
 */
const waitTime = (time) => {
  act(() => {
    jest.advanceTimersByTime(time);
  });
};

export { waitTime };
