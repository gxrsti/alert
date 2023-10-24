import { GithubIcon } from './icons';

export const Footer = () => {
  return (
    <div className="w-full my-2 px-6 flex justify-center mt-20">
      <div className="w-full grow max-w-screen-xl flex justify-between p-2">
        <p className="text-sm">
          ©2023 Alert - Made by{' '}
          <a href="https://github.com/gxrsti" target="blank">
            Gersti
          </a>
        </p>
        <a href="https://github.com/gxrsti/alert" target="blank">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};
