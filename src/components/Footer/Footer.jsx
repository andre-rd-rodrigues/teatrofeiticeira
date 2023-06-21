import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { website_pages } from "../../../data";

const Footer = () => {
  return (
    <footer className={`${styles.container} mb-6`}>
      <hr className="my-6 sm:mx-auto dark:border-gray-100 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <Image
            width={200}
            height={100}
            src="/images/logo.png"
            alt="Balcão Cristal"
          />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 list-none">
          {website_pages.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="mr-4 md:mr-6 ">
                {label}
              </Link>
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
