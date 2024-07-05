"use client";
import SearchHeader from "@/app/components/header/Header";
import Sorting from "@/app/components/sorting/Sorting";
import Main from "@/app/components/main/Main";
import styles from "../layout.module.css";
import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { getFavoriteTracks } from "@/store/features/playlistSlice";
import { useEffect } from "react";
import { useInitializeLikedTracks, useLikedTracks } from "@/hooks/likes";
import TrackLine from "@/app/components/trackLine/TrackLine";
type Props = {
  track: TrackType;
};
export default function MainPageSongs() {
  //   let favoriteTracks: TrackType[] = [];
  // const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  // useEffect(() => {
  //   dispatch(getFavoriteTracks(tokens));
  // }, [tracks, dispatch, tokens]);

  // useEffect(() => {
  //   dispatch(setPlaylist({ tracks }));
  // }, [tracks, dispatch]);

  // const filtredTracks = useAppSelector(
  //   (store) => store.playlist.filtredPlaylist
  // );
  //   useInitializeLikedTracks();

  let favoriteTracks: TrackType[] = [];

  const tokens = useAppSelector((state) => state.auth.tokens);
  try {
    let favoriteTracks = getFavoriteTracks(tokens.access);
  } catch (err) {
    return alert("error");
  }
  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Мои треки</h2>
      <Sorting />
      <Main tracks={favoriteTracks} />
      {/* <TrackLine track={favoriteTracks} /> */}
    </>
  );
}
