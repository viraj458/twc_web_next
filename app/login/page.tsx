import Link from 'next/link';
import LogoGreen from '../components/LogoGreen';

export default function Login() {
  return (
    <div className="image w-screen h-screen flex items-center justify-center fixed">
      <div className="w-[1502px] h-[1502px] bg-[#083f46] rounded-full ml-[-1300px]">
        <div className="flex justify-center gap-[400px] ml-[1300px] mt-[500px]">
          <div>
            <div>
              <p className="font-bold text-white text-4xl mb-2 mt-14">
                Hi there,
              </p>
              <div className="font-semibold text-xl mb-10 text-white">
                <p>Welcome to our </p>
                <p>contacts portal</p>
              </div>
            </div>
            <div>
              <form className="login">
                <div className="flex flex-col w-[380px]">
                  <input
                    className="rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold"
                    type="email"
                    placeholder="email"
                  />
                  <input
                    className="rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold"
                    type="password"
                    placeholder="password"
                  />
                </div>
                <div className="flex gap-2 text-white mt-6">
                  <button
                    type="button"
                    className="border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold"
                  >
                    login
                  </button>
                  <p className="mt-1">or</p>
                  <Link
                    className="font-semibold underline underline-offset-2 mt-1"
                    href="/registration"
                  >
                    click here to register
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-[150px]">
            <LogoGreen />
          </div>
        </div>
      </div>
    </div>
  );
}
