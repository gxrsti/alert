import { Store } from './store';

const success = (message: string) => {
  Store.add(message, 'success');
};

const defaultToast = (message: string) => {
  Store.add(message, 'default');
};

const toast = Object.assign(defaultToast, {
  success: success,
});

export { toast };
