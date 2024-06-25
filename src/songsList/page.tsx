import { TrackType } from "@/types/types";
import SongList from "../app/components/songsList/SongsList";
import { getTracks } from "@/app/api/userApi";

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
  return <SongList tracks={tracks} />;
}
