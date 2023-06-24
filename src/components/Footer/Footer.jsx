import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { website_pages } from "../../data";

const Footer = () => {
  return (
    <footer className={`${styles.container} mb-6 text-center`}>
      <hr className="my-6 sm:mx-auto dark:border-gray-100 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center mb-4 sm:mb-0 justify-center"
        >
          <Image
            width={200}
            height={100}
            src="/images/logo.png"
            alt="Balcão Cristal"
          />
        </Link>
        <ul className="flex flex-wrap gap-4 items-center mb-6 text-sm  list-none">
          {website_pages.map(({ href, label }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a
          href="https://andrerodrigo.com/"
          target="_blank"
          className="hover:underline"
        >
          André Rodrigo
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
