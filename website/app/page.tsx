'use client';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'alert';

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Toaster />
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
    </div>
  );
}
