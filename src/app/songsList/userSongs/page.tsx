"use client";
import SearchHeader from "@/app/components/header/Header";
import Sorting from "@/app/components/sorting/Sorting";
import Main from "@/app/components/main/Main";
import styles from "../layout.module.css";
import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useEffect } from "react";
import { getFavoriteTracks } from "@/store/features/playlistSlice";

export default function MainPageSongs() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.tokens?.access);
  const favTracks: TrackType[] = useAppSelector(
    (state) => state.playlist.likedTracks
  );
  console.log(favTracks);
  useEffect(() => {
    if (token) {
      if (favTracks) {
        dispatch(getFavoriteTracks(token));
      }
    }
  }, [token, dispatch]);

  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Мои треки</h2>
      <Sorting />
      <Main tracks={favTracks} isFavorite={true} />
    </>
  );
}
