'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { IToast, ToasterProps } from '../core/types';
import { Store } from '../core/store';
import { Toast } from './toast';

const Toaster = ({ position = 'bottom-right', style, className }: ToasterProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    return Store.subscribe((toast) => {
      setToasts([...toasts, toast]);
    });
  }, [toasts]);

  function removeToast(toast: IToast) {
    setToasts(toasts.filter((x) => x.id !== toast.id));
  }

  useEffect(() => {
    //console.log(toasts);
  }, [toasts]);

  return (
    <section style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
      {toasts.map((toast, index) => (
        <Toast key={index} toast={toast} remove={removeToast} />
      ))}
    </section>
  );
};

export { Toaster };
