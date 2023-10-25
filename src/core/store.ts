/**
 * Manages a store of toasts and provides methods for subscribing to, publishing, and adding toasts.
 * @class
 */
import { IToast, ToastType } from './types';

class Reducer {
  toasts: Array<IToast>;
  subscribers: Array<(toast: IToast) => void>;

  /**
   * Creates a new Reducer instance with empty toasts and subscribers arrays.
   * @constructor
   */
  constructor() {
    this.toasts = [];
    this.subscribers = [];
  }

  /**
   * Subscribe a function to receive toast updates.
   * @param {function} func - A function that will be called when a new toast is published.
   * @returns {function} - A function to unsubscribe from toast updates.
   */
  subscribe(func: (toast: IToast) => void) {
    this.subscribers = [...this.subscribers, func];
    return () => {
      this.subscribers.splice(this.subscribers.indexOf(func), 1);
    };
  }

  /**
   * Publish a new toast to all subscribers.
   * @param {IToast} toast - The toast object to publish.
   */
  publish(toast: IToast) {
    this.subscribers.forEach((func) => func(toast));
  }

  /**
   * Add a new toast to the store and publish it to subscribers.
   * @param {string} message - The message to display in the toast.
   * @param {ToastType} type - The type of the toast (e.g., 'info', 'success', 'error').
   */
  add(message: string, type: ToastType) {
    const toast = {
      id: this.toasts.length,
      state: 'enter',
      type: type,
      title: message,
    } as IToast;

    this.toasts = [...this.toasts, toast];
    this.publish(toast);
  }
}

/**
 * The singleton instance of the Reducer class that serves as the central store for toasts.
 */
export const Store = new Reducer();
