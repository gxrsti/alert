'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { IToast, ToastState, ToasterProps } from '../core/types';
import { Store } from '../core/store';
import { Toast } from './toast';

const Toaster = ({ position = 'bottom-right', duration = 3000, style, className }: ToasterProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const unsubscribe = Store.subscribe((toast) => {
      setToasts((toasts) => [...toasts, toast]);
      handleToast(toast);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function handleToast(toast: IToast) {
    setTimeout(() => updateToastState(toast, 'idle'), 300);
    setTimeout(() => updateToastState(toast, 'leave'), duration - 100);
    setTimeout(() => removeToast(toast), duration);
  }

  function updateToastState(toast: IToast, state: ToastState) {
    setToasts((toasts) => {
      var copy = toasts.slice();
      var index = copy.findIndex((x) => x.id === toast.id);
      copy[index] = { ...copy[index], state: state };
      return copy;
    });
  }

  const removeToast = useCallback(
    (toast: IToast) => setToasts((toasts) => toasts.filter((x) => x.id !== toast.id)),
    [],
  );

  return (
    <section
      style={{
        position: 'absolute',
        overflow: 'hidden',
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        transform: 'translateY(0)',
        height: 'fit-content',
        transition: 'all 230ms cubic-bezier(.21, 1.02, .73, 1)',
      }}
    >
      {toasts.map((toast, index) => (
        <Toast key={index} toast={toast} remove={removeToast} />
      ))}
    </section>
  );
};

export { Toaster };
