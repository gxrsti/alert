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
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from 'alert';
import { useState } from 'react';

type ToasterPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export default function App() {
  const [position, setPosition] = useState<ToasterPosition>('bottom-right');
  const [reverse, setReverse] = useState<boolean>(false);

  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <Toaster reverse={reverse} position={position} />
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
        <div className="flex gap-4 justify-center items-center">
          <Select
            value={position}
            onValueChange={(s) => {
              setPosition(s as ToasterPosition);
            }}
          >
            <SelectTrigger style={{ color: 'black' }} className="w-[180px] h-[auto]">
              <SelectValue placeholder="Select Position" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Positions</SelectLabel>
                <SelectItem value="top-left">top-left</SelectItem>
                <SelectItem value="top-center">top-center</SelectItem>
                <SelectItem value="top-right">top-right</SelectItem>
                <SelectItem value="bottom-left">bottom-left</SelectItem>
                <SelectItem value="bottom-center">bottom-center</SelectItem>
                <SelectItem value="bottom-right">bottom-right</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Switch id="reverse" checked={reverse} onCheckedChange={() => setReverse((reverse) => !reverse)} />
            <Label className="text-gray-900" htmlFor="reverse">
              Reverse
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
