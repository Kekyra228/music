"use client";
import Link from "next/link";
import styles from "./signup.module.css";
import Image from "next/image";
import { authorize } from "@/app/api/authApi";

type Props = {
  params: {
    name: string;
    login: string;
    password: string | number;
  };
};
export default function SignUp({ params }: Props) {
  let error: string | null = null;
  const authUser = async () => {
    try {
      await authorize(params.name, params.login, params.password);
    } catch (err: unknown) {
      error =
        err instanceof Error
          ? "Ошибка при загрузке треков. " + err.message
          : "Неизвестная ошибка";
    }
  };
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
              <Link href="signin">
                <p className={styles.btnSignUpText} onClick={authUser}>
                  Зарегестрироваться
                </p>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
