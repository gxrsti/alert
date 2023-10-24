import React from 'react';
import { Codeblock } from './codeblock';

const codeBlock = `
import { Toaster, toast } from 'alert';

const App = () => {
  return (
    <div>
      <Toaster/>
      <button onClick={() => toast('This is a toast.')}>Create a toast</button>
    </div>
  );
}
`;

export const UsageSection = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="font-medium text-lg">Usage</p>
      <Codeblock code={codeBlock} />
    </div>
  );
};
