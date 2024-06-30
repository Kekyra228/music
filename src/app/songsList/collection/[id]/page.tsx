// "use client";
import { getCollections } from "@/app/api/collectionsApi";
import { TrackType } from "@/types/types";
import SongList from "@/app/components/songsList/SongsList";
import SongsCollection from "@/app/components/collection/SongsCollection";
import SearchHeader from "@/app/components/header/Header";
import styles from "./homeCollection.module.css";
import Sorting from "@/app/components/sorting/Sorting";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setPlaylist } from "@/store/features/playlistSlice";

type Props = {
  params: {
    id: string;
  };
};
export default async function HomeCollection({ params }: Props) {
  // const dispatch = useAppDispatch();
  let tracks: TrackType[] = [];
  let error: string | null = null;
  try {
    tracks = await getCollections(params.id);
    // dispatch(setPlaylist({ tracks }));
    // const filtredTracks = useAppSelector(
    //   (store) => store.playlist.filtredPlaylist
    // );
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? "Ошибка при загрузке треков. " + err.message
        : "Неизвестная ошибка";
  }
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
  // const filtredTracks = useAppSelector(
  //   (store) => store.playlist.filtredPlaylist
  // );
  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>{title}</h2>
      <Sorting />
      <SongList tracks={tracks.items} />
    </>
  );
}
