import styles from "./page.module.css";

export default function Exit() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className="modal__block">
        <form className="modal__form-login" action="#">
          <a href="../">
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
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
