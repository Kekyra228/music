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
      <Image
        src="/logo.png"
        width={113.33}
        height={17}
        alt="logo"
        fetchPriority="low"
      />
      <div className={styles.nav_menu}>
        <Image
          className={styles.burger}
          src="/navburger.svg"
          width={20}
          height={10}
          alt="navburger"
          onClick={openNavBar}
          fetchPriority="low"
        />
        {isOpenBar && (
          <ul className="menu__list">
            <li className={styles.nav_item}>
              <Link href="/" className={styles.nav_link}>
                Главное
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/songsList/userSongs" className={styles.nav_link}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/signin" className={styles.nav_link}>
                Войти
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/signin">
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
