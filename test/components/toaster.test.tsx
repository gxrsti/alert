import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Toaster, toast } from '../../src';
import { Store } from '../../src/core/store';
import { toasterStyle } from '../mocks/styleMock';
import { waitTime } from '../setup';

describe('Add and remove test', () => {
  it('should add and remove one toast correctly', async () => {
    const mockDuration = 2000;

    render(
      <>
        <Toaster duration={mockDuration} />
        <button type="button" onClick={() => toast('This is a default toast')}>
          Default
        </button>
      </>,
    );

    expect(Store.toasts).toHaveLength(0);

    const button = screen.getByText('Default');
    fireEvent.click(button);

    let toastElement = screen.getByText('This is a default toast');
    expect(toastElement).not.toBeNull();

    waitTime(300);
    await waitFor(() => {
      expect(toastElement).toHaveClass('toast-idle');
    });

    waitTime(mockDuration - 100 - 300);
    await waitFor(() => {
      expect(toastElement).toHaveClass('toast-leave');
    });

    waitTime(100);
    await waitFor(() => {
      toastElement = screen.queryByText('This is a default toast');
      expect(toastElement).toBeNull();
    });
  });

  it('should add and remove multiple toasts', async () => {
    render(
      <>
        <Toaster duration={2000} />
        <button type="button" onClick={() => toast('This is a default toast')}>
          Default
        </button>
      </>,
    );

    expect(Store.toasts).toHaveLength(0);

    const button = screen.getByText('Default');

    // click 3 times
    const clickTimes = 3;
    for (let i = 0; i < clickTimes; i++) {
      fireEvent.click(button);
    }

    const toastElements = screen.getAllByText('This is a default toast');

    for (let i = 0; i < clickTimes; i++) {
      expect(toastElements[i]).toHaveTextContent('This is a default toast');
    }

    waitTime(2000);
    await waitFor(() => {
      const allToastElements = screen.queryAllByText('This is a default toast');
      expect(allToastElements).toHaveLength(0);
    });
  });
});

describe('Toaster position test', () => {
  it('should be at the right position', () => {
    const position = 'top-left';
    const [y, x] = position.split('-');
    const positionStyle = {
      [y]: 0,
      [x]: 0,
    };

    render(
      <>
        <Toaster position={position} />
        <button type="button" onClick={() => toast('This is a default toast')}>
          Default
        </button>
      </>,
    );

    expect(Store.toasts).toHaveLength(0);

    const button = screen.getByText('Default');
    fireEvent.click(button);

    const toasterElement = screen.getByText('This is a default toast').closest('section');

    expect(toasterElement).toHaveStyle(toasterStyle);
    expect(toasterElement).toHaveStyle(positionStyle);
  });
});

describe('Toaster reverse test', () => {
  const addThreeToast = () => {
    for (let i = 1; i <= 3; i++) {
      toast(`This is toast ${i}`);
    }
  };

  it('should display toasts in default order with reversed is set as false', () => {
    render(
      <>
        <Toaster />
        <button type="button" onClick={addThreeToast}>
          Default
        </button>
      </>,
    );

    expect(Store.toasts).toHaveLength(0);

    const button = screen.getByText('Default');
    fireEvent.click(button);

    const toastElements = screen.getAllByText(/This is toast/);

    expect(toastElements[0]).toHaveTextContent('This is toast 1');
    expect(toastElements[1]).toHaveTextContent('This is toast 2');
    expect(toastElements[2]).toHaveTextContent('This is toast 3');
  });

  it('should display toasts in reverse order', () => {
    render(
      <>
        <Toaster reverse />
        <button type="button" onClick={addThreeToast}>
          Default
        </button>
      </>,
    );

    expect(Store.toasts).toHaveLength(0);

    const button = screen.getByText('Default');
    fireEvent.click(button);

    const toastElements = screen.getAllByText(/This is toast/);

    expect(toastElements[0]).toHaveTextContent('This is toast 3');
    expect(toastElements[1]).toHaveTextContent('This is toast 2');
    expect(toastElements[2]).toHaveTextContent('This is toast 1');
  });
});
