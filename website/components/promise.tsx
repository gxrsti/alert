import React, { useState } from 'react';
import { Button } from './ui/button';
import { Codeblock } from './codeblock';
import { toast } from 'alert';

const codeBlock = () => `
toast.promise(promiseFn, {
  loading: 'Loading Text',
  success: 'Success Text',
  error: 'Error Text',
});
`;

const promiseFunction = (type: 'success' | 'error') =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === 'success') {
        resolve('Success');
      } else {
        reject('Error');
      }
    }, 2000);
  });

interface PromiseSectionProps {
  // Define any props you need
}

export const PromiseSection = ({}: PromiseSectionProps) => {
  function handleSuccessPromise() {
    toast.promise(() => promiseFunction('success'), {
      loading: 'Loading...',
      success: 'Action successful',
      error: 'Error occurred',
    });
  }

  function handleErrorPromise() {
    toast.promise(() => promiseFunction('error'), {
      loading: 'Loading...',
      success: 'Action successful',
      error: 'Error occurred',
    });
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <p className="font-medium text-lg">Promise</p>
      <div className="flex gap-3 flex-wrap overflow-auto max-w-[90vw]">
        <Button variant="outline" size={'sm'} onClick={handleSuccessPromise}>
          Success
        </Button>
        <Button variant="outline" size={'sm'} onClick={handleErrorPromise}>
          Error
        </Button>
      </div>
      <Codeblock code={codeBlock()} />
    </div>
  );
};
