import { getCollections } from "@/app/api/collectionsApi";
import { TrackType } from "@/types/types";
import SongList from "@/app/components/songsList/SongsList";
import SongsCollection from "@/app/components/collection/SongsCollection";
import SearchHeader from "@/app/components/header/Header";
import styles from "./homeCollection.module.css";
import Sorting from "@/app/components/sorting/Sorting";
import { useAppSelector } from "@/hooks/store";

type Props = {
  params: {
    id: string;
  };
};
export default async function HomeCollection({ params }: Props) {
  // const filtredTracks = useAppSelector(
  //   (store) => store.playlist.filtredPlaylist
  // );
  let tracks: TrackType[] = [];
  // let filtredPlaylist: TrackType[] = [];
  let error: string | null = null;
  try {
    tracks = await getCollections(params.id);
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? "Ошибка при загрузке треков. " + err.message
        : "Неизвестная ошибка";
  }
  console.log({ tracks });
  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Треки {params.id}</h2>
      <Sorting />
      <SongList tracks={tracks} />
    </>
  );
}
