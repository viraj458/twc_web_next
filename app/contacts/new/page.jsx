import { BiLogOutCircle } from 'react-icons/bi';
import LogoWhite from '../../components/LogoWhite';

export default function Contacts() {
  return (
    <div className="image w-screen h-screen flex items-center justify-center fixed">
      <div className="absolute w-[1530px] h-[980px] bg-[#083F46] rounded-full rotate-[20deg]">
        <div className="justify-center ml-[300px] mt-[200px] rotate-[-20deg]">
          <LogoWhite />
          <div className="mt-14">
            <div>
              <p className="font-bold text-3xl text-white mb-8">New Contact</p>
            </div>
            <div>
              <form>
                <div>
                  <input
                    className="w-[420px]  rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold"
                    type="text"
                    placeholder="full name"
                  />
                  <input
                    className="w-[420px] ml-10 rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold"
                    type="text"
                    placeholder="email"
                  />
                </div>

                <div className="flex">
                  <input
                    className="w-[420px] rounded-full mb-6 px-5 py-2 text-[18px] text-[#ff2f2f] placeholder-[#083f46] font-semibold"
                    type="text"
                    placeholder="phone number"
                  />
                  <div>
                    <label
                      className="font-semibold text-white ml-11"
                      htmlFor="gender"
                    >
                      gender
                      <input
                        className="ml-28 mr-3"
                        type="radio"
                        name="gender"
                        value="Male"
                      />
                      male
                      <input
                        className="ml-28 mr-3"
                        type="radio"
                        name="gender"
                        value="Female"
                      />
                      female
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold text-white"
                >
                  Add contact
                </button>
              </form>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="flex ml-[900px] mt-20 py-1 text-[18px] text-white font-bold underline underline-offset-2"
            >
              <BiLogOutCircle className="w-7 h-7 mr-2" />
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
