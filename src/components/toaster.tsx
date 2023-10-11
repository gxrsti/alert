'use client';
import React, { useEffect, useState } from 'react';
import { Toast, ToasterProps } from '../core/types';
import { Store } from '../core/store';

const Toaster = ({ position = 'bottom-right', style, className }: ToasterProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    Store.subscribe((toast) => setToasts([...toasts, toast]));
  });

  return (
    <section>
      {toasts.map((toast, index) => (
        <p key={index}>{toast.title}</p>
      ))}
    </section>
  );
};

export { Toaster };
