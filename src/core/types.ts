/**
 * Defines the types and interfaces related to a Toast component in React.
 */

import React from 'react';

/**
 * Defines the types of Toast notifications.
 */
export type ToastType = 'default' | 'success' | 'error';

/**
 * Defines the possible positions where the Toaster component can be displayed.
 */
export type ToasterPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/**
 * Defines the possible states of a Toast notification.
 */
export type ToastState = 'enter' | 'idle' | 'leave';

/**
 * Represents the properties that can be passed to the Toaster component.
 *
 * @param {ToasterPosition} position - The position where the Toaster will be displayed.
 * @param {number} duration - The duration (in milliseconds) for which a Toast notification is displayed.
 * @param {boolean} reverse - Whether the order of Toasts should be reversed.
 * @param {React.CSSProperties} style - Additional CSS styles for the Toaster.
 * @param {string} className - Additional CSS class name for the Toaster.
 * @param {'light' | 'dark'} theme - The theme of the Toaster (light or dark).
 */
export interface ToasterProps {
  position?: ToasterPosition;
  duration?: number;
  reverse?: boolean;
  style?: React.CSSProperties;
  className?: string;
  theme?: 'light' | 'dark';
}

/**
 * Represents the properties of an individual Toast notification.
 *
 * @param {IToast} toast - The Toast object containing information about the notification.
 */
export interface ToastProps {
  toast: IToast;
}

/**
 * Represents the structure of a Toast notification.
 *
 * @param {number} id - The unique identifier of the Toast.
 * @param {ToastState} state - The current state of the Toast (enter, idle, leave).
 * @param {ToastType} type - The type of the Toast (default, success, error).
 * @param {number} zIndex - The z-index value for the Toast.
 * @param {string | undefined} title - The title text for the Toast (optional).
 * @param {'light' | 'dark' | undefined} theme - The theme of the Toast (optional, light or dark).
 */
export interface IToast {
  id: number;
  state: ToastState;
  type: ToastType;
  zIndex: number;
  title?: string;
  theme?: 'light' | 'dark';
}
