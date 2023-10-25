/**
 * A Toast component for displaying notifications.
 *
 * @param {Object} toast - The toast notification object.
 *   @property {string} type - The type of the toast ('success' or 'error').
 *   @property {string} theme - The theme for the toast ('light' or 'dark').
 *   @property {string} state - The state of the toast ('idle' or 'leave').
 *   @property {string} title - The text content of the toast.
 *   @property {number} zIndex - The z-index of the toast.
 *   @property {number} id - The unique identifier for the toast.
 *
 * @returns {JSX.Element} - A component for displaying toast notifications.
 */

import React from 'react';
import { ToastProps } from '../core/types';
import '../core/styles.css';
import { ErrorIcon, SuccessIcon } from './assets';

const Toast = ({ toast }: ToastProps) => {
  const themeBackground = toast.theme === 'light' ? 'rgb(243, 244, 246)' : 'rgb(17, 24, 39)';
  const themeFont = toast.theme === 'light' ? 'rgb(17, 24, 39)' : 'rgb(243, 244, 246)';

  return (
    <div
      className={`toast-${toast.state}`}
      style={{
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderRadius: '0.375rem',
        backgroundColor: themeBackground,
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        color: themeFont,
        zIndex: toast.zIndex,
        display: 'flex',
        gap: 4,
        minWidth: 220,
      }}
      key={toast.id}
    >
      {toast.type === 'success' && SuccessIcon}
      {toast.type === 'error' && ErrorIcon}
      {toast.title}
    </div>
  );
};

export { Toast };
