import React, { useEffect } from 'react';
import { ToastProps } from '../core/types';

const Toast = ({ toast, remove }: ToastProps) => {
  useEffect(() => {
    setTimeout(() => remove(toast), 3000);
  }, []);

  return (
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
      key={toast.id}
    >
      {toast.title}
      {toast.id}
    </div>
  );
};

export { Toast };
