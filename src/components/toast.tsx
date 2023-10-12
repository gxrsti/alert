'use client';
import React from 'react';
import { ToastProps } from '../core/types';
import '../core/styles.css';
import { SuccessIcon } from './assets';

const Toast = ({ toast }: ToastProps) => {
  return (
    <div
      className={`toast-${toast.state}`}
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
        zIndex: toast.id,
        display: 'flex',
        gap: 4,
        minWidth: 220,
      }}
      key={toast.id}
    >
      {toast.type === 'success' && SuccessIcon}
      {toast.title}
    </div>
  );
};

export { Toast };
