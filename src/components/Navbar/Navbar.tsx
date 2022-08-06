import React from "react";
import { IoSearch } from "react-icons/io5";

import styles from "@/styles/Navbar.module.scss";
import Logo from "@/assets/svg/logo.svg";
import Instagram from "@/assets/svg/instagram.svg";
import Image from "next/image";
import UserProfile from "../UserProfile";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-start p-4 justify-between relative h-28">
      <div className="flex">
        <div
          className={`${styles.shadow} w-12 h-12 flex items-center justify-center rounded-lg search`}
        >
          <IoSearch className="text-center" />
        </div>
        <div className="pl-10"/>
        <div className={`${styles.shadow} px-10 py-3 rounded-lg`}>
          <Link href={'/category'}>Category</Link>
        </div>
      </div>
      <div className="">
      <Link href="/" >
        <a className="true-centered">
          <Image src={Logo} alt="Flaunting Knits" width={96} height={82} className=""/>
        </a>
        </Link>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <Link href="https://www.instagram.com/flaunting.knits/" >
          <a className="shadow-instagram flex rounded-lg">
            <Image src={Instagram} alt="Our Instagram"  />
          </a> 
        </Link>
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navbar;
