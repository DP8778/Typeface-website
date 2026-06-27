import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <Image
              src="/Typeface.png"
              alt="Typeface"
              width={233}
              height={140}
              priority
            />
          </a>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="/Portfolio/kontakt">About us</a>
          </li>
          <li>
            <a href="/Portfolio/kontakt">Contact</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
