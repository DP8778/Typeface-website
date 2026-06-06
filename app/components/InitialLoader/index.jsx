"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./InitialLoader.module.scss";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      window.setTimeout(() => {
        setVisible(false);
      }, 700);
    };

    if (document.readyState === "complete") {
      hideLoader();
      return;
    }

    window.addEventListener("load", hideLoader);

    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.loader}>
      <Image
        src="/Typeface.png"
        alt="Typeface"
        width={280}
        height={280}
        priority
      />
    </div>
  );
}
