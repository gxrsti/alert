import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeblockProps {
  code: string;
}
export function Codeblock({ code }: CodeblockProps) {
  return (
    <Highlight theme={themes.github} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="px-5 text-sm rounded-md overflow-auto w-[90vw] max-w-[660px]">
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
