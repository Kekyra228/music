"use client";
import { TrackType } from "@/types/types";
import SongList from "../songsList/SongsList";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setPlaylist } from "@/store/features/playlistSlice";
import { useCallback, useEffect, useState } from "react";

type Props = {
  tracks: TrackType[];
  isFavorite?: boolean;
};

export default function Main({ tracks, isFavorite }: Props) {
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  }, [tracks, dispatch]);

  const filtredTracks = useAppSelector(
    (store) => store.playlist.filtredPlaylist
  );
  return (
    <>
      {" "}
      {isLoading ? (
        "Загрузка треков..."
      ) : (
        <SongList tracks={filtredTracks} isFavorite={isFavorite} />
      )}
    </>
  );

  // {/* <TrackLine track={favoriteTracks} /> */};
}
