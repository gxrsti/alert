import { Toast, ToastType } from './types';

class Reducer {
  toasts: Array<Toast>;
  constructor() {
    this.toasts = [];
  }

  add(message: string, type: ToastType) {
    this.toasts = [
      ...this.toasts,
      {
        id: this.toasts.length,
        title: message,
      },
    ];
  }
}

export const Store = new Reducer();
