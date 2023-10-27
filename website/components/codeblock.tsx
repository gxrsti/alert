import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Button } from './ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'alert';

interface CodeblockProps {
  code: string;
}
export function Codeblock({ code }: CodeblockProps) {
  function handleCopy() {
    navigator.clipboard.writeText(code.trim());
    toast.success('Copied to clipboard!');
  }

  return (
    <Highlight theme={themes.github} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="px-5 text-sm rounded-md overflow-auto w-[90vw] max-w-[660px] relative">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 absolute right-3 top-3.5 transition-all"
            onClick={handleCopy}
            aria-label="Copy"
          >
            <Copy className="h-4 w-4" />
          </Button>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
