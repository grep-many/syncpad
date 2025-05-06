import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export const Header = ({ children, className }: HeaderProps) => {
  return (
      <div className={cn("header", className)}>
          <Link href="/" className="flex items-center">
              <Image
                  src="/assets/icons/logo.png"
                  alt="SyncPad Logo"
                  height={32}
                  width={32}
              />
              <h3 className="text-xl font-bold hidden md:block">SyncPad</h3>
          </Link>
          {children}
      </div>
  );
};
