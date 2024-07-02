"use client";
import { useInitializeLikedTracks } from "@/hooks/likes";
import styles from "./user.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/store";

function User() {
  useInitializeLikedTracks();
  const userName = useAppSelector((state) => state.auth.user?.username);
  console.log(userName);
  // if (!userName) {
  //   return null;
  // }
  return (
    <div className={styles.sidebarExit}>
      <p>{userName}</p>
    </div>
  );
}

export default User;
