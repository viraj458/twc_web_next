import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import LogoWhite from './components/LogoWhite';

export default function Home() {
  return (
    <div className="image w-screen h-screen flex items-center justify-center fixed">
      <div className="w-[1530px] h-[980px] bg-[#083F46] rounded-full rotate-[20deg] fixed" />
      <div className="absolute flex flex-col items-start mt-20">
        <div>
          <LogoWhite />
        </div>
        <div className="mt-16">
          <p className="font-bold text-3xl text-white">Welcome,</p>
          <p className="font-semibold text-xl text-white">
            This is where your contacts will live. Click the button below to add
            a new contact
          </p>
        </div>
        <div className="mt-14">
          <Link href="/contacts/new">
            <button
              type="button"
              className="border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold text-white"
            >
              add your first contact
            </button>
          </Link>
        </div>
        <button
          type="button"
          className="flex ml-[900px] pt-24 text-[18px] text-white font-bold underline underline-offset-2"
        >
          <BiLogOutCircle className="w-7 h-7 mr-2" />
          logout
        </button>
      </div>
    </div>
  );
}
