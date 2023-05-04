import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

type Props = {
  contact: {
    name: string;
    gender: string;
    email: string;
    phone: string;
  };
};

export default function ReadOnlyRow({ contact }: Props): JSX.Element {
  return (
    <>
      <td className=" text-m font-semibold">{contact.name}</td>
      <td className=" text-m font-semibold">{contact.gender}</td>
      <td className=" text-m font-semibold">{contact.email}</td>
      <td className=" text-m font-semibold">{contact.phone}</td>
      <td className=" mt-3 gap-2 text-xl flex">
        <div className="mr-4 ml-2">
          <button type="button">
            <MdEdit />
          </button>
        </div>
        <div>
          <button type="button">
            <RiDeleteBin6Line />
          </button>
        </div>
      </td>
    </>
  );
}
