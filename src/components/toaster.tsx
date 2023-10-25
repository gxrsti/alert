import React, { useCallback, useEffect, useState } from 'react';
import { IToast, ToastState, ToasterProps } from '../core/types';
import { Store } from '../core/store';
import { Toast } from './toast';

/**
 * Toaster component for displaying toast notifications.
 * @param {object} ToasterProps - Props for configuring the toaster.
 * @returns {JSX.Element} - A component for displaying toast notifications.
 */
const Toaster = ({
  position = 'bottom-right',
  duration = 3000,
  reverse = false,
  theme = 'light',
  style,
  className,
}: ToasterProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const [positionState, setPositionState] = useState<React.CSSProperties>({});
  const [height, setHeight] = useState(0);
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

  useEffect(() => {
    const [y, x] = position.split('-');
    setPositionState({
      [y]: 0,
      [x]: 0,
    });
  }, [position]);

  useEffect(() => {
    setHeight(toasts.length * 41);
  }, [toasts]);

  function handleToast(toast: IToast) {
    setTimeout(() => updateToastState(toast, 'idle'), 300);
    if (toast.type === 'loading') return;
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

  const reversedToasts = reverse ? toasts.slice().reverse() : toasts;

  return (
    <section
      style={{
        position: 'fixed',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        margin: 16,
        transform: 'translateY(0)',
        height: height,
        transition: 'all 230ms cubic-bezier(.21, 1.02, .73, 1)',
        ...positionState,
      }}
    >
      {position.startsWith('bottom') && !reverse && <div className="flex h-full w-full grow" />}
      {reversedToasts.map((toast, index) => (
        <Toast key={index} toast={{ ...toast, zIndex: index, theme }} />
      ))}
    </section>
  );
};

export { Toaster };
