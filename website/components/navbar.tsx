'use client';
import { Button } from './ui/button';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { GithubIcon } from './icons';

export function Navbar() {
  const [stars, setStars] = useState('');

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch('https://api.github.com/repos/gxrsti/alert');
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (e) {}
    }

    fetchStars();
  }, []);
  return (
    <div className="w-full my-2 px-6 flex justify-center">
      <div className="w-full grow max-w-screen-xl flex justify-between p-2">
        <p className="font-bold text-lg">Alert</p>
        <div className="flex gap-3">
          <Link href="https://github.com/gxrsti/alert" target="_blank">
            <Button variant="ghost" size="sm" className="flex gap-2">
              <GithubIcon />
              {stars}
            </Button>
          </Link>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
