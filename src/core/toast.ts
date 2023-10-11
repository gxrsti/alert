import React from 'react';

const success = (message: string | React.ReactNode) => {
  // create toast
};
const defaultToast = (message: string | React.ReactNode) => {
  // create toast
};
const toast = Object.assign(defaultToast, {
  success: success,
});

export { toast };
