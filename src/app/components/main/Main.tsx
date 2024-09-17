"use client";
import { TrackType } from "@/types/types";
import SongList from "../songsList/SongsList";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setPlaylist } from "@/store/features/playlistSlice";
import { useCallback, useEffect, useState } from "react";

type Props = {
  tracks: TrackType[];
};

export default function Main({ tracks }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

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
      {isLoading ? "Загрузка треков..." : <SongList tracks={filtredTracks} />}
    </>
  );
}
