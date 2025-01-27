import styles from "./page.module.css";
import Image from "next/image";

export default function Exit() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
                <Image src="/logo.png" width={113.33} height={17} alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter">
              <a href="../index.html">Войти</a>
            </button>
            <button className="modal__btn-signup">
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
