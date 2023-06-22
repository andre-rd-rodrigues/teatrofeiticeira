"use client";
import React from "react";
import { Navbar } from "flowbite-react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { website_pages } from "@/data";

const AppNavbar = () => {
  return (
    <Navbar fluid className={styles.container}>
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/images/logo.png"
          width={150}
          height={80}
          alt="Balcão Cristal"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className={styles.collapse}>
        {website_pages.map(({ label, href }) => (
          <Navbar.Link href={href} key={label}>
            {label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
