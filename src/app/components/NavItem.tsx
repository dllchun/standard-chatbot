import Link from "next/link";
import React from "react";

interface NavItemProps {
  href: string;
  label: string;
  pathname: string;
}

const NavItem = ({ href, label, pathname }: NavItemProps) => {
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <span
        className={`text-sm font-medium cursor-pointer ${
          isActive
            ? "text-black border-b-2 border-purple-500 pb-2"
            : "text-gray-600"
        } hover:text-black`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavItem;
