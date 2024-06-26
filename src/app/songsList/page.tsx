import { TrackType } from "@/types/types";
import { getTracks } from "@/app/api/userApi";
import SearchHeader from "../components/header/Header";
import Sorting from "../components/sorting/Sorting";
import Main from "../components/main/Main";
import styles from "./layout.module.css";

export default async function MainPageSongs() {
  let tracks: TrackType[] = [];
  let error: string | null = null;
  try {
    tracks = await getTracks();
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? "Ошибка при загрузке треков. " + err.message
        : "Неизвестная ошибка";
  }
  return (
    <>
      <SearchHeader />
      <h2 className={styles.heading}>Треки</h2>
      <Sorting />
      <Main tracks={tracks} />
    </>
  );
}
