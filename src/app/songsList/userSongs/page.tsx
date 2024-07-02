// "use client";
import SearchHeader from "@/app/components/header/Header";
import Sorting from "@/app/components/sorting/Sorting";
import Main from "@/app/components/main/Main";
import styles from "../layout.module.css";
import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useEffect } from "react";
import { getFavoriteTracks } from "@/store/features/playlistSlice";

export default async function MainPageSongs() {
  // useInitializeLikedTracks();
  const likedTracks = useAppSelector((store) => store.playlist.likedTracks);
  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Мои треки</h2>
      <Sorting />
      <Main tracks={likedTracks} />
    </>
  );
}
