"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo vlevo */}
        <div className={styles.logo}>
          <a href="/">
            <Image
              src="/Typeface.png"
              alt="Logo"
              width={233}
              height={140}
              priority
            />
          </a>
        </div>

        {/* 🔥 Pravý blok (social + odkazy pod sebou) */}
        <div className={styles.rightBlock}>

          {/* ⬆ Social ikony */}
          <div className={styles.social}>
            <a href="https://www.instagram.com/fanatix.co/" target="_blank">
              <Image
                src="/instagram-logo.svg"
                alt="Instagram"
                width={22}
                height={22}
              />
            </a>

            <a href="https://www.behance.net/frantieknevala1#" target="_blank">
              <Image
                src="/behance-circle.svg"
                alt="Behance"
                width={24}
                height={24}
              />
            </a>
          </div>

          {/* ⬇ Odkazy */}
          <ul className={`${styles.links} ${open ? styles.open : ""}`}>
            <li><a href="/Portfolio/kontakt">O nás</a></li>
            <li><a href="/Portfolio/kontakt">portfolio</a></li>
            <li><a href="/Portfolio/kontakt">Kontakt</a></li>
            <li><a href="/Portfolio/kontakt">Kontakt</a></li>
          </ul>

        </div>

        {/* Burger pro mobil */}
        <div
          className={`${styles.toggle} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}
