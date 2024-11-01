"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Hook to get current route
import NavItem from "./NavItem";

const Header = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <header className="bg-white shadow-sm border-b">
      {/* First Row: Logo */}
      <div className="container mx-auto flex py-4 px-6 md:py-2">
        <Link href="/" passHref>
          <span className="cursor-pointer">
            <Image
              src="/i2_logo.png" // Replace with your logo path
              alt="Company Logo"
              width={64} // Adjust size based on your logo
              height={64}
              priority
            />
          </span>
        </Link>
      </div>

      {/* Second Row: Navigation Tabs centered */}
      <div className="">
        <nav className="container mx-auto flex justify-center space-x-8 pb-3 px-6">
          <NavItem href="/playground" label="Playground" pathname={pathname} />
          <NavItem href="/chat-log" label="Activity" pathname={pathname} />
          <NavItem href="/analytics" label="Analytics" pathname={pathname} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
