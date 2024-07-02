"use client";
import Link from "next/link";
import styles from "./signin.module.css";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/store";
import { getTokens, getUser } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      await Promise.all([
        dispatch(getTokens(formData))
          .unwrap()
          .then(() => {}),
        dispatch(getUser(formData)).unwrap(),
      ]);
      router.push("/");
      console.log("вы вошли");
    } catch (error: unknown) {
      if (error.message === "Заполните поля") {
        setMessage(error.message);
      }
      setMessage("Ошибка");
    }
  }
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
              name="email"
              placeholder="Почта"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={styles.inputLogin}
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />

            <button className={styles.btnEnter} onClick={handleSubmit}>
              <p className={styles.btnEnterText}>Войти</p>
            </button>
            <button className={styles.btnSignUp}>
              <Link href="/signup">
                <p className={styles.btnSignUpText}>Зарегестрироваться</p>
              </Link>
            </button>
            {message && <p className={styles.errorMes}>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
