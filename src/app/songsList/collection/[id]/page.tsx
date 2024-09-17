"use client";
import { getCollections } from "@/app/api/collectionsApi";
import { TrackType } from "@/types/types";
import SongList from "@/app/components/songsList/SongsList";
import SearchHeader from "@/app/components/header/Header";
import styles from "./homeCollection.module.css";
import Sorting from "@/app/components/sorting/Sorting";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useEffect } from "react";
import { getAllTracks } from "@/store/features/playlistSlice";

type Props = {
  params: {
    id: string;
  };
};

export default function HomeCollection({ params }: Props) {
  const dispatch = useAppDispatch();
  const tracksAll: TrackType[] = useAppSelector(
    (state) => state.playlist.filtredPlaylist
  );

  useEffect(() => {
    dispatch(getAllTracks());
  }, [dispatch]);

  let title = "";
  switch (params.id) {
    case "1":
      title = "Плейлист дня";
      break;
    case "2":
      title = "100 танцевальных хитов";
      break;
    case "3":
      title = "Инди-заряд";
      break;
    default:
      break;
  }

  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>{title}</h2>
      <Sorting />
      <SongList tracks={tracksAll} />
    </>
  );
}
