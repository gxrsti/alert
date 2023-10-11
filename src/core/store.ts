import { IToast, ToastType } from './types';

class Reducer {
  toasts: Array<IToast>;
  subscribers: Array<(toast: IToast) => void>;

  constructor() {
    this.toasts = [];
    this.subscribers = [];
  }

  subscribe(func: (toast: IToast) => void) {
    this.subscribers = [...this.subscribers, func];
  }

  publish(toast: IToast) {
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
