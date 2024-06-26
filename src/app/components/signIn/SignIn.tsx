import Link from "next/link";
import styles from "./signin.module.css";
import Image from "next/image";
import { logon } from "@/app/api/logonApi";

type Props = {
  params: {
    login: string;
    password: string | number;
  };
};
export default function Signin({ params }: Props) {
  let error: string | null = null;
  const logonUser = async () => {
    try {
      await logon(params.login, params.password);
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
          <form className={styles.loginForm} action="#">
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

            <button className={styles.btnEnter}>
              <Link href="/">
                <p className={styles.btnEnterText}>Войти</p>
              </Link>
            </button>
            <button className={styles.btnSignUp}>
              <Link href="signup">
                <p className={styles.btnSignUpText}>Зарегестрироваться</p>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
