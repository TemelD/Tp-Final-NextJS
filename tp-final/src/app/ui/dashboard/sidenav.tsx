import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
    return (
        <div className="flex items-center bg-header-1 px-3 py-4">
          <Link
            className="mb-2 rounded-mdp-4"
            href="/dashboard"
          >
            <div className="w-32 text-white md:w-40">
              <Logo />
            </div>
          </Link>
          
          {/* Liens au milieu */}
          <div className="flex justify-center gap-4 w-full">
            <NavLinks />
          </div>

        </div>
      );
}
