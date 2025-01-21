import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IToast, ToasterProps } from '../core/types';
import { Store } from '../core/store';
import { Toast } from './toast';

/**
 * Toaster component for displaying toast notifications.
 * @param {object} ToasterProps - Props for configuring the toaster.
 * @returns {JSX.Element} - A component for displaying toast notifications.
 */
const Toaster = ({ position = 'bottom-right', duration = 6000, theme = 'light', options }: ToasterProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const unsubscribe = Store.subscribe((toast) => {
      setToasts((toasts) => {
        var index = toasts.findIndex((x) => x.id === toast.id);
        if (index === -1) {
          return [...toasts, toast];
        } else {
          var copy = [...toasts];
          copy[index] = toast;
          return copy;
        }
      });
      handleToast(toast);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function handleToast(toast: IToast) {
    if (toast.type !== 'loading') {
      setTimeout(() => removeToast(toast), duration);
    }
  }

  const removeToast = useCallback(
    (toast: IToast) => setToasts((toasts) => toasts.filter((x) => x.id !== toast.id)),
    [],
  );

  const isTop = position.startsWith('top');
  const reversedToasts = useMemo(() => (isTop ? toasts.slice().reverse() : toasts), [isTop, toasts]);

  return (
    <section
      className="toaster"
      style={{
        [position.split('-')[0]]: 0,
        [position.split('-')[1]]: 0,
      }}
    >
      {reversedToasts.map((toast, index) => (
        <Toast
          key={toast.id}
          index={reversedToasts.length - (index + 1)}
          toast={{ ...toast, theme, ...options, ...options?.[toast.type] }}
          position={position}
        />
      ))}
    </section>
  );
};

export { Toaster };
