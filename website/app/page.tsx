import { Button } from '@/components/ui/button';
import { Toaster } from 'alert';

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Toaster />
      <Button variant="secondary">Create a toast</Button>
    </div>
  );
}
