import Link from "next/link";
import React, { FC } from "react";
import { MdOutlineCopyright } from "react-icons/md";

export const Navbar: FC = () => {
  return (
    <>
      <div className=" bg-white flex flex-row items-center px-2 gap-1">
        <MdOutlineCopyright /> <p>Ryan Cedrick Rosete</p>
      </div>
      <nav className="sticky top-0 w-full border-2 bg-white shadow-md p-6">
        <h2 className="text-right">
          <Link href={"/"}>Sign out</Link>
        </h2>
      </nav>
    </>
  );
};
