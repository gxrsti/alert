import { Toast, ToastType } from './types';

class Reducer {
  toasts: Array<Toast>;
  subscribers: Array<(toast: Toast) => void>;

  constructor() {
    this.toasts = [];
    this.subscribers = [];
  }

  subscribe(func: (toast: Toast) => void) {
    this.subscribers = [...this.subscribers, func];
  }

  publish(toast: Toast) {
    this.subscribers.forEach((func) => func(toast));
  }

  add(message: string, type: ToastType) {
    const toast = {
      id: this.toasts.length,
      title: message,
    };

    this.toasts = [...this.toasts, toast];
    this.publish(toast);
  }
}

export const Store = new Reducer();
