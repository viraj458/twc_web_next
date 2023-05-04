import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import LogoWhite from '../components/LogoWhite';
import ContactList from '../components/ContactList';

const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    gender: 'Female',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 555-5555',
    gender: 'Male',
  },
  {
    id: 4,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 555-5555',
    gender: 'Male',
  },
  {
    id: 5,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 555-5555',
    gender: 'Male',
  },
  {
    id: 6,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 555-5555',
    gender: 'Male',
  },
  {
    id: 7,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 555-5555',
    gender: 'Male',
  },
];

export default function Contacts() {
  return (
    <div className="image w-screen h-screen flex  items-center justify-center fixed">
      <div className="absolute w-[1530px] h-[980px] bg-[#083F46] rounded-full rotate-[20deg]">
        <div className="justify-center ml-[300px] mt-[200px] rotate-[-20deg]">
          <LogoWhite />

          <div className="flex gap-[610px] mb-5 mt-9">
            <p className="font-bold text-3xl text-white">Contacts</p>
            <Link href="/contacts/new">
              <button
                type="button"
                className="border-[1px] rounded-full px-5 py-1 text-[18px] border-white font-semibold text-white"
              >
                add new contact
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-3xl mr-[320px] h-60 overflow-y-scroll scrollbar-none">
            {contacts && <ContactList contacts={contacts} />}
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
