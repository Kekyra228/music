"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpenBar, setIsOpenBar] = useState(false);
  const openNavBar = () => {
    setIsOpenBar((isOpenBar) => !isOpenBar);
  };

  return (
    <nav className={styles.main_nav}>
      <Image src="/logo.png" width={113.33} height={17} alt="logo" />
      <div className={styles.nav_menu}>
        <img src="./navburger.svg" alt="navburger" onClick={openNavBar} />
        {isOpenBar && (
          <ul className="menu__list">
            <li className={styles.nav_item}>
              <a href="#" className={styles.nav_link}>
                Главное
              </a>
            </li>
            <li className={styles.nav_item}>
              <a href="#" className={styles.nav_link}>
                Мой плейлист
              </a>
            </li>
            <li className={styles.nav_item}>
              <a href="../signin.html" className={styles.nav_link}>
                Войти
              </a>
            </li>
            <li className={styles.nav_item}>
              <Link href="signin">
                <Image src="/exit.svg" width={40} height={40} alt="exit" />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
