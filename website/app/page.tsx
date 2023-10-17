'use client';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'alert';
import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Toaster reverse={reverse} />
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => toast('This is a default toast')}>
            Default
          </Button>
          <Button variant="secondary" onClick={() => toast.success('This is a success toast')}>
            Success
          </Button>
          <Button variant="secondary" onClick={() => toast.error('This is a error toast')}>
            Error
          </Button>
        </div>
        <div className="flex">
          <Button variant={reverse ? 'destructive' : "outline"} onClick={() => setReverse((reverse) => !reverse)}>
            Toggle Reverse Toasts
          </Button>
        </div>
      </div>
    </div>
  );
}
