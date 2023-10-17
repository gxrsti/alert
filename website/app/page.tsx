'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Toaster, toast } from 'alert';
import { useState } from 'react';

type ToasterPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export default function App() {
  const [position, setPosition] = useState<ToasterPosition>('bottom-right');
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Toaster position={position}/>
      <div className="flex gap-4">
        <Select onValueChange={(s) => {
          setPosition(s as ToasterPosition);
        }}>
          <SelectTrigger style={{color: 'black'}} className="w-[180px] h-[auto]">
            <SelectValue placeholder="Select Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Positions</SelectLabel>
              <SelectItem value='top-left'>top-left</SelectItem>
              <SelectItem value='top-center'>top-center</SelectItem>
              <SelectItem value='top-right'>top-right</SelectItem>
              <SelectItem value='bottom-left'>bottom-left</SelectItem>
              <SelectItem value='bottom-center'>bottom-center</SelectItem>
              <SelectItem value='bottom-right'>bottom-right</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
