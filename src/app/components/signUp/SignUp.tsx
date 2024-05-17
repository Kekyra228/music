import Link from "next/link";
import styles from "./signup.module.css";
import Image from "next/image";

export default function SignUp() {
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.block}>
            <form className={styles.loginForm}>
              <a href="../">
                <div className={styles.logo}>
                    <Image
                    src="/blackLogo.svg"
                    width={140}
                    height={21}
                    alt="logo"
                />
                </div>
              </a>
              <input
                className={styles.inputLogin}
                type="text"
                name="login"
                placeholder="Почта"
              />
              <input
                className={styles.inputLogin}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <input
                className={styles.inputLogin}
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <button className={styles.btnSignup}>
                <Link href="signin"><p className={styles.btnSignUpText}>Зарегестрироваться</p></Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }