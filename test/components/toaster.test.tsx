import React from 'react';
import { render } from '@testing-library/react';
import { Toaster } from '../../src';

test('should render', () => {
  render(
    <>
      <Toaster />
    </>,
  );
});
