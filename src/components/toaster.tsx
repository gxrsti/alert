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
    <section style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
      {toasts.map((toast, index) => (
        <div
          style={{
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            borderRadius: '0.375rem',
            backgroundColor: 'rgb(243, 244, 246)',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: 'rgb(17, 24, 39)',
          }}
          key={index}
        >
          {toast.title}
        </div>
      ))}
    </section>
  );
};

export { Toaster };
