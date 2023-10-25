import { Store } from './store';

export const promise = <T>(
  promiseFn: () => Promise<T>,
  options: {
    loading: string;
    success: string;
    error: string;
  },
): Promise<T> => {
  // Loading Toast
  Store.add(options.loading, 'loading');

  return promiseFn().then(
    (value: T) => {
      // Show Success Toast
      Store.add(options.success, 'success');
      return value;
    },
    (error: any) => {
      // Show Error Toast
      Store.add(options.error, 'error');
      return Promise.reject(error);
    },
  );
};
