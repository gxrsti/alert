import React from 'react';
import { Button } from './ui/button';
import { Codeblock } from './codeblock';
import { toast } from 'alert';

const codeBlock = (postition: string) => `
<Toaster position='${postition}'/>
`;

interface PositionSectionProps {
  position: string;
  setPosition: (position: string) => void;
}

const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

export const PositionSection = ({ position, setPosition }: PositionSectionProps) => {
  function getClassName(pos: string) {
    return pos === position ? 'bg-gray-100 text-gray-900' : '';
  }
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="font-medium text-lg">Position</p>
      <div className="flex gap-3 flex-wrap overflow-auto max-w-[90vw]">
        {positions.map((position) => (
          <Button
            className={getClassName(position)}
            variant="outline"
            size={'sm'}
            key={position}
            onClick={() => {
              setPosition(position);
              setTimeout(() => toast('This is a default toast'), 50);
            }}
          >
            {position}
          </Button>
        ))}
      </div>
      <Codeblock code={codeBlock(position)} />
    </div>
  );
};
