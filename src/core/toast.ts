'use client';
import { Store } from './store';

const success = (message: string) => {
  Store.add(message, 'success');
};

const error = (message: string) => {
  Store.add(message, 'error');
};

const defaultToast = (message: string) => {
  Store.add(message, 'default');
};

const toast = Object.assign(defaultToast, {
  success: success,
  error: error,
});

export { toast };
