import React from 'react';
import { render, screen } from '@testing-library/react';
import { Toast } from '../../src/components/toast';
import { IToast } from '../../src/core/types';
import { darkTheme, lightTheme, toastStyle } from '../mocks/styleMock';

describe('Rendering Toasts', () => {
  const testToast = (toast: IToast) => {
    render(<Toast toast={toast} />);

    const toastElement = screen.getByText(toast.title);
    const successIcon = screen.queryByTestId('success-icon');
    const errorIcon = screen.queryByTestId('error-icon');

    expect(toastElement).toBeInTheDocument();
    expect(toastElement).toHaveClass(`toast-${toast.state}`);
    expect(toastElement).toHaveStyle(toastStyle);
    expect(toastElement).toHaveStyle({
      zIndex: toast.zIndex,
    });

    if (toast.theme === 'light') {
      expect(toastElement).toHaveStyle(lightTheme);
    } else {
      expect(toastElement).toHaveStyle(darkTheme);
    }

    if (toast.type === 'success') {
      expect(successIcon).toBeInTheDocument();
    } else if (toast.type === 'error') {
      expect(errorIcon).toBeInTheDocument();
    } else {
      expect(successIcon).toBeNull();
      expect(errorIcon).toBeNull();
    }
  };

  it('should render the default toast with light theme', () => {
    const defaultToast: IToast = {
      id: 1,
      state: 'enter',
      type: 'default',
      zIndex: 1,
      title: 'Default Message',
      theme: 'light',
    };

    testToast(defaultToast);
  });

  it('should render the default toast with dark theme', () => {
    const defaultDarkToast: IToast = {
      id: 1,
      state: 'enter',
      type: 'default',
      zIndex: 1,
      title: 'Default Message',
      theme: 'dark',
    };

    testToast(defaultDarkToast);
  });

  it('should render the success toast', () => {
    const successToast: IToast = {
      id: 1,
      state: 'enter',
      type: 'success',
      zIndex: 1,
      title: 'Success Message',
    };

    testToast(successToast);
  });

  it('should render the error toast', () => {
    const errorToast: IToast = {
      id: 1,
      state: 'enter',
      type: 'error',
      zIndex: 1,
      title: 'Error Message',
    };

    testToast(errorToast);
  });
});
