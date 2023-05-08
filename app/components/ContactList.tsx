import Image from 'next/image';
import male from '../assets/male.png';
import female from '../assets/female.png';
import ReadOnlyRow from './ReadOnlyRaw';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
}

interface Props {
  contacts: Contact[];
}
export default function ContactList({ contacts }: Props): JSX.Element {
  return (
    <div className="text-[#083F46] py-3">
      <form>
        <table>
          <tbody>
            <tr className=" text-m">
              <th className="px-5 py-[6px]"> </th>
              <th className="pr-[120px]">full name</th>
              <th className="pr-14">gender</th>
              <th className="pr-[200px]">email</th>
              <th className="pr-[60px]">phone number</th>
              <th className="pr-5"> </th>
              <th className="pr-5"> </th>
            </tr>

            {contacts.map((contact: Contact) => (
              <tr key={contact.id}>
                <td className="px-5 py-[6px]">
                  {contact.gender === 'Male' ? (
                    <Image className="w-10 h-10" src={male} alt="Male" />
                  ) : (
                    <Image className="w-10 h-10" src={female} alt="Female" />
                  )}
                </td>
                <ReadOnlyRow contact={contact} />
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
