"use client";
import styles from "./styles/common.module.css";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h2>Что-то пошло не так!</h2>
        <button onClick={reset}>Попробовать снова</button>
      </div>
    </div>
  );
}
