import React from 'react';

export type ToastType = 'default' | 'success';

export type ToasterPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToasterProps {
  position?: ToasterPosition;
  style?: React.CSSProperties;
  className?: string;
}

export interface ToastProps {
  toast: IToast;
  remove: (toast: IToast) => void;
}

export interface IToast {
  id: number;
  title?: string;
}
