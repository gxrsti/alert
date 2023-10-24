'use client';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'alert';
import { useState } from 'react';
import { InstallationSection } from '@/components/installation';
import { UsageSection } from '@/components/usage';
import { TypesSection } from '../components/types';
import { PositionSection } from '@/components/position';

type ToasterPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export default function App() {
  const [position, setPosition] = useState<ToasterPosition>('bottom-right');
  const [reverse, setReverse] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="w-full min-h-full flex justify-center">
      <Toaster reverse={reverse} position={position} theme={theme} />
      <div className="flex flex-col gap-10 items-center mt-40">
        <div className="text-center flex flex-col gap-3 items-center">
          <p className="text-4xl font-bold">A!ert</p>
          <p>Customizable toast component for React</p>
          <Button variant="outline" className="w-fit mt-1" onClick={() => toast('This is a default toast')}>
            Render Toast
          </Button>
        </div>
        <InstallationSection />
        <UsageSection />
        <TypesSection />
        <PositionSection position={position} setPosition={(position) => setPosition(position as ToasterPosition)} />
      </div>
    </div>
  );
}
