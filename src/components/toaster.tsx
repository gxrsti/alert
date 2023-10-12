'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { IToast, ToasterProps } from '../core/types';
import { Store } from '../core/store';
import { Toast } from './toast';

const Toaster = ({ position = 'bottom-right', duration = 3000, style, className }: ToasterProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const unsubscribe = Store.subscribe((toast) => {
      setToasts((toasts) => [...toasts, toast]);
      setTimeout(() => removeToast(toast), duration);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const removeToast = useCallback(
    (toast: IToast) => setToasts((toasts) => toasts.filter((x) => x.id !== toast.id)),
    [],
  );

  return (
    <section style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
      {toasts.map((toast, index) => (
        <Toast key={index} toast={toast} remove={removeToast} />
      ))}
    </section>
  );
};

export { Toaster };
