"use client";
import Link from "next/link";
import styles from "./signup.module.css";
import Image from "next/image";
// import { authorize } from "@/app/api/authApi";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/store";
import { useRouter } from "next/navigation";
import { createUser } from "@/store/features/authSlice";

// type Props = {
//   params: {
//     email: string;
//     password: string;
//     username: string;
//   };
// };
export default function SignUp() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
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
      await Promise.all([dispatch(createUser(formData)).unwrap()]);
      router.push("signin");
    } catch (error) {
      console.log(error);
    }
  }
  // let error: string | null = null;
  // const authUser = async () => {
  //   try {
  //     await authorize(params.email, params.password, params.username);
  //   } catch (err: unknown) {
  //     error =
  //       err instanceof Error ? "Ошибка" + err.message : "Неизвестная ошибка";
  //   }
  // };

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
              name="username"
              value={formData.username}
              placeholder="Имя пользователя"
              onChange={handleChange}
            />
            <input
              className={styles.inputLogin}
              type="text"
              name="email"
              value={formData.email}
              placeholder="Почта"
              onChange={handleChange}
            />
            <input
              className={styles.inputLogin}
              type="password"
              name="password"
              value={formData.password}
              placeholder="Пароль"
              onChange={handleChange}
            />
            <button className={styles.btnSignup} onClick={handleSubmit}>
              <Link href="/signin">
                <p className={styles.btnSignUpText}>Зарегестрироваться</p>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
