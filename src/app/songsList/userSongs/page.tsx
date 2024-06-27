import { TrackType } from "@/types/types";
// import styles from "..layout.module.css";
import SearchHeader from "@/app/components/header/Header";
import Sorting from "@/app/components/sorting/Sorting";
import Main from "@/app/components/main/Main";
import { getFavoriteTracks } from "@/app/api/userApi";
import styles from "../layout.module.css";

export default async function MainPageSongs() {
  let tracks: TrackType[] = [];
  let error: string | null = null;
  try {
    tracks = await getFavoriteTracks();
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? "Ошибка при загрузке треков. " + err.message
        : "Неизвестная ошибка";
  }
  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Мои треки</h2>
      <Sorting />
      <Main tracks={tracks} />
    </>
  );
}