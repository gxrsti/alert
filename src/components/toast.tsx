import React, { useEffect, useState } from 'react';
import { ToastProps } from '../core/types';
import '../core/styles.css';
import { ErrorIcon, LoadingIcon, SuccessIcon } from './assets';

const toastIcons = {
  success: SuccessIcon,
  error: ErrorIcon,
  loading: LoadingIcon,
};

const Toast = React.memo(({ toast, position, index }: ToastProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`toast ${toast.theme} ${position.split('-')[0]} ${toast.className}`}
      data-mounting={mounted}
      style={{
        ...{
          '--index': index,
        },
        ...toast.style,
      }}
      key={toast.id}
    >
      {toastIcons[toast.type]}
      {toast.title}
      {index}
    </div>
  );
});

export { Toast };
