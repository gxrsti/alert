import React, { useState } from 'react';
import { Codeblock } from './codeblock';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const codeBlock = (manager: string) => `
${manager} ${manager === 'yarn' ? 'add' : 'install'} alert
`;

export const InstallationSection = () => {
  const [manager, setManager] = useState('npm');

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <p className="font-medium text-lg">Installation</p>
        <Select defaultValue="npm" value={manager} onValueChange={(v) => setManager(v)}>
          <SelectTrigger style={{ color: 'black' }} className="w-[84px] h-[38px]" aria-label="Package Manager">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="npm">npm</SelectItem>
            <SelectItem value="pnpm">pnpm</SelectItem>
            <SelectItem value="yarn">yarn</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Codeblock code={codeBlock(manager)} />
    </div>
  );
};
