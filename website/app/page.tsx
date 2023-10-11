import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'alert';

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Toaster />
      <Button variant="secondary" onClick={() => toast('This is a sample toast')}>
        Create a toast
      </Button>
    </div>
  );
}
