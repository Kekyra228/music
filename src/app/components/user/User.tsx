"use client";
import { useInitializeLikedTracks } from "@/hooks/likes";
import styles from "./user.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useRouter } from "next/navigation";

function User() {
  const router = useRouter();
  function navToExit() {
    router.push("/signin");
  }
  useInitializeLikedTracks();
  const userName = useAppSelector((state) => state.auth.user?.username);
  console.log(userName);
  // if (!userName) {
  //   return null;
  // }
  return (
    <div className={styles.sidebarExit}>
      <Image
        src="/exit.svg"
        width={40}
        height={40}
        alt="exit"
        onClick={navToExit}
      />
      <p>{userName}</p>
    </div>
  );
}

export default User;
