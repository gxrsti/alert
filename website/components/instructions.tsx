import React from 'react';
import { FiUser } from 'react-icons/fi';
import { BiSolidCircle } from 'react-icons/bi';

const Instructions = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=''>
        <h1 className="font-bold text-lg mt-8 mb-8">Installation Instructions</h1>
      </div>
      <div>
        <div>
          <div className="bg-black dark:bg-white h-10  w-[500px] flex  justify-between  p-3 rounded-t-md">
            <div className="flex gap-1">
              <BiSolidCircle className="text-green-500" />
              <BiSolidCircle className="text-red-500" />
              <BiSolidCircle className="text-yellow-500" />
            </div>
            <div>
              <FiUser className="text-white dark:text-black" />
            </div>
          </div>
          <div className="bg-white border-black dark:bg-black dark:border-white border w-[500px]  shadow-md p-9 rounded-b-md">
            <h1 className="pb-8 text-lg text-black">Customizable toast component for React.</h1>
            <pre className='code-content mb-4' aria-hidden="true">
              <h1 className='mb-4'>Install the component in your project</h1>
              <code className='flex flex-col '>
                <span className='bg-black w-fit p-1 bg-opacity-20 rounded text-sm'>npm install alert</span>
                <span>or</span>
                <span className='bg-black w-fit p-1 bg-opacity-20 rounded text-sm'>yarn install alert</span>
              </code>
            </pre>
            <div className="flex flex-col">
              <pre className="code-content flex flex-col" aria-hidden="true">
              <h1 className=''>Add the {'<'}Toaster/{'>'} component to your app.</h1>
              <h1 className='mb-4'>Use the toast() function anywhere in your app.</h1>
                <code className='bg-black dark:bg-white'>
                  <div className='line'>
                    <span className='text-red-500'>import</span>
                    <span className=''> </span>
                    <span className='dark:text-black text-white'> {'{'}</span>
                    <span className='dark:text-[#F47067] text-orange-500'> Toaster,</span>
                    <span className=''> </span>
                    <span className='dark:text-black text-white'>toast </span>
                    <span className='dark:text-black text-white'>{'} '}</span>
                    <span className='text-red-500'>from</span>
                    <span className='dark:text-black text-white'>'alert';</span>
                  </div>
                  <div className="line">
                    <span className="dark:text-[#F47067] text-red-500">const</span>
                    <span className="dark:text-black text-white"> </span>
                    <span className="dark:text-[#DCBDFB] text-orange-500">App</span>
                    <span className="dark:text-black text-white"> </span>
                    <span className="text-[#F47067]">=</span>
                    <span className="dark:text-black text-white"> () </span>
                    <span className="text-[#F47067]">=&gt;</span>
                    <span className="dark:text-black text-white"> {'{'}</span>
                  </div>
                  <div className='line'>
                    <span className='text-red-500'>&nbsp;&nbsp;return </span>
                    <span className='dark:text-black text-white'>(</span>
                  </div>
                  <div className='line'>
                    <span className='dark:text-black text-white'>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}</span>
                    <span className='text-green-500'>div</span>
                    <span className='dark:text-black text-white'>{'>'}</span>
                  </div>
                  <div className='line'>
                  <span className='dark:text-black text-white'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}</span>
                  <span className='text-green-500'>Toaster </span>
                  <span className='dark:text-black text-white'>/{'>'}</span>
                  </div>
                  <div className="line">
                    <span className="dark:text-black text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                    <span className="dark:text-[#8DDB8C] text-green-500">button</span>
                    <span className="dark:text-black text-white"> </span>
                    <span className="dark:text-[#6CB6FF] text-blue-500">onClick</span>
                    <span className="text-[#F47067]">=</span>
                    <span className="text-[#96D0FF]">{'{'}() </span>
                    <span className="dark:text-[#96D0FF] text-blue-500">=&gt; </span>
                  </div>
                  <div>
                    <span className="text-purple-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toast</span>
                    <span className="dark:text-black text-white">('This is a toast.'){'}'}</span>
                    <span className="dark:text-black text-white">&gt;</span>
                  </div>
                  <div className="line">
                    <span className="dark:text-black text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a toast</span>
                  </div>
                  <div className="line">
                    <span className="dark:text-black text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
                    <span className="dark:text-[#8DDB8C] text-green-500">button</span>
                    <span className="dark:text-black text-white">&gt;</span>
                  </div>
                  <div className='line'>
                  <span className='dark:text-black text-white'>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}/</span>
                    <span className='text-green-500'>div</span>
                    <span className='dark:text-black text-white'>{'>'}</span>
                  </div>
                  <div className="line">
                    <span className="dark:text-black text-white">&nbsp;&nbsp;);</span>
                  </div>
                  <div className="line">
                    <span className="dark:text-black text-white">{'}'}</span>
                  </div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
