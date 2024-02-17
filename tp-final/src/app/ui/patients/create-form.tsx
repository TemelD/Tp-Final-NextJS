import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createCustomer } from   '@/app/lib/actions';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-600 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium text-white">
            Choose name
          </label>
          <div className="relative">
          <input name='name' id='name' className='text-black border-black bg-white' type="text" />
          <label htmlFor="customer" className="mb-2 block text-sm font-medium text-white">
            Choose email
          </label>
            <input name='email' id='email' className='text-black border-black bg-white' type="text" />
          </div>
        </div>
       
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/patients"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Link href="/dashboard/patients">
          <Button type="submit">Create Customer</Button>
        </Link>
      </div>
    </form>
  );
}
