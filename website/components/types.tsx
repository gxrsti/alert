import React, { useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'alert';
import { Codeblock } from './codeblock';

const messages = {
  default: 'This is a default toast',
  success: 'This is a success toast',
  error: 'This is an error toast',
};

const codeBlock = (method: string, message: string) =>
  method === 'promise'
    ? `
const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

toast.promise(promise, {
  loading: 'Loading...',
  success: 'Successfully toasted',
  error: 'An error occured',
});
`
    : `
toast${method && `.${method}`}('${message}')
`;

export const TypesSection = () => {
  const [message, setMessage] = useState(messages.default);
  const [method, setMethod] = useState('');

  const showMessage = (newMessage, newMethod = '') => {
    setMessage(newMessage);
    setMethod(newMethod);
    if (!newMethod) {
      toast(newMessage);
    } else {
      toast[newMethod](newMessage);
    }
  };

  const resolvePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));
  const rejectPromise = () => new Promise((_, reject) => setTimeout(reject, 2000));

  const showPromise = () => {
    setMethod('promise');
    var randomBool = Math.random() < 0.5;
    toast.promise(randomBool ? resolvePromise : rejectPromise, {
      loading: 'Loading...',
      success: 'Successfully toasted',
      error: 'An error occured',
    });
  };

  function getClassName(type: string) {
    return type === method ? 'bg-gray-100 text-gray-900' : '';
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <p className="font-medium text-lg">Types</p>
      <div className="flex gap-3">
        <Button className={getClassName('')} variant="outline" size="sm" onClick={() => showMessage(messages.default)}>
          Default
        </Button>
        <Button
          className={getClassName('success')}
          variant="outline"
          size="sm"
          onClick={() => showMessage(messages.success, 'success')}
        >
          Success
        </Button>
        <Button
          className={getClassName('error')}
          variant="outline"
          size="sm"
          onClick={() => showMessage(messages.error, 'error')}
        >
          Error
        </Button>
        <Button className={getClassName('promise')} variant="outline" size="sm" onClick={() => showPromise()}>
          Promise
        </Button>
      </div>
      <Codeblock code={codeBlock(method, message)} />
    </div>
  );
};
