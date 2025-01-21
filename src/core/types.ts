import { CSSProperties } from 'react';

export type ToastType = 'default' | 'success' | 'error' | 'loading';

export type ToasterPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastOptions = Partial<Pick<IToast, 'style' | 'className'>>;

export type ToasterOptions = ToastOptions & {
  [key in ToastType]?: ToastOptions;
};
export interface ToasterProps {
  position?: ToasterPosition;
  options?: ToasterOptions;
  duration?: number;
  theme?: 'light' | 'dark';
}

export interface ToastProps {
  toast: IToast;
  index: number;
  position: ToasterPosition;
}

export interface IToast {
  id: number;
  type: ToastType;
  title?: string;
  theme?: 'light' | 'dark';
  style?: CSSProperties;
  className?: string;
}
