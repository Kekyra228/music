"use client";
import { TrackType } from "@/types/types";
import SongList from "../songsList/SongsList";
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
  }, [tracks, dispatch]);

  const filtredTracks = useAppSelector(
    (store) => store.playlist.filtredPlaylist
  );
  return <SongList tracks={filtredTracks} />;
}
