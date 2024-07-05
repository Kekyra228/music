"use client";
import SearchHeader from "@/app/components/header/Header";
import Sorting from "@/app/components/sorting/Sorting";
import Main from "@/app/components/main/Main";
import styles from "../layout.module.css";
import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useEffect, useState } from "react";
import TrackLine from "@/app/components/trackLine/TrackLine";
import { useRouter } from "next/navigation";
import { fetchFavoriteTracks } from "@/app/api/userApi";
import { getUser } from "@/store/features/authSlice";
import { toast } from "react-toastify";

export default function MainPageSongs() {
  const token = useAppSelector((state) => state.auth.tokens?.access);
  const [favoriteTracks, setFavoriteTracks] = useState<TrackType[]>([]);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchFavoriteTracks(token)
      .then((data) => {
        setFavoriteTracks(data);
      })
      .catch((error) => {
        if (error.message === "401") {
          toast.error("Вам необходимо авторизоваться!");
          router.push("/signin");
          return;
        } else {
          toast.error(error.message);
          return;
        }
      });
  }, [dispatch, router, token]);

  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Мои треки</h2>
      <Sorting />
      <Main tracks={favoriteTracks} isFavorite={true} />
    </>
  );
}
