import { getCollections } from "@/app/api/collectionsApi";
import { TrackType } from "@/types/types";
import SongList from "@/app/components/songsList/SongsList";
import SongsCollection from "@/app/components/collection/SongsCollection";
import SearchHeader from "@/app/components/header/Header";

type Props = {
  params: {
    id: string;
  };
};
export default async function Home({ params }: Props) {
  let tracks: TrackType[] = [];
  let error: string | null = null;
  try {
    tracks = await getCollections(params.id);
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? "Ошибка при загрузке треков. " + err.message
        : "Неизвестная ошибка";
  }
  return (
    <>
      <SearchHeader />
      <h2>Треки {params.id}</h2>
      <SongList tracks={tracks} />
    </>
  );
}
