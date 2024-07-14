"use client";
import { TrackType } from "@/types/types";
import SearchHeader from "../components/header/Header";
import Sorting from "../components/sorting/Sorting";
import Main from "../components/main/Main";
import styles from "./layout.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useEffect } from "react";
import {
  getAllTracks,
  getFavoriteTracks,
  setPlaylist,
} from "@/store/features/playlistSlice";

export default function MainPageSongs() {
  // let tracks: TrackType[] = [];
  // let error: string | null = null;
  // try {
  //   tracks = await getTracks();
  // } catch (err: unknown) {
  //   error =
  //     err instanceof Error
  //       ? "Ошибка при загрузке треков. " + err.message
  //       : "Неизвестная ошибка";
  // }
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.tokens?.access);
  const tracksAll: TrackType[] = useAppSelector(
    (state) => state.playlist.tracks
  );

  useEffect(() => {
    if (!token) {
      dispatch(getAllTracks());
    }
    if (token) {
      dispatch(getFavoriteTracks(token));
      dispatch(getAllTracks());
    }
  }, [token, dispatch]);

  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Треки</h2>
      <Sorting />
      <Main tracks={tracksAll} />
    </>
  );
}
