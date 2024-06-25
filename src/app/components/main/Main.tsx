"use client";
import { TrackType } from "@/types/types";
import SongsCollection from "../collection/SongsCollection";
import SearchHeader from "../header/Header";
import Navbar from "../navbar/Navbar";
import SongList from "../songsList/SongsList";
import Sorting from "../sorting/Sorting";
import TrackLine from "../trackLine/TrackLine";
import styles from "./main.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setPlaylist } from "@/store/features/playlistSlice";
import { useCallback, useEffect } from "react";

type Props = {
  tracks: TrackType[];
};

export default function Main({ tracks }: Props) {
  const dispatch = useAppDispatch();
  // function renderPlaylist() {
  //   const memoized = useCallback(() => {
  //     dispatch(setPlaylist({ tracks }));
  //   }, [tracks]);
  // }
  // useEffect(() => {
  //   memoized();
  // }, [memoized]);
  useEffect(() => {
    dispatch(setPlaylist({ tracks }));
  }, [tracks]);

  const filtredTracks = useAppSelector(
    (store) => store.playlist.filtredPlaylist
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar />
          <div className={styles.centerblock__content}>
            <SearchHeader />
            <Sorting tracks={filtredTracks} />
            <SongList tracks={filtredTracks} />
          </div>
          <SongsCollection />
        </main>
        <TrackLine />
      </div>
    </div>
  );
}
