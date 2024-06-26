// import { getCollections } from "@/app/api/collectionsApi";
// import { TrackType } from "@/types/types";
// import SongList from "../../songsList/SongsList";
// import SongsCollection from "../SongsCollection";
// import styles from "./songscollection.module.css";
// import Sorting from "../../sorting/Sorting";

// type Props = {
//   params: {
//     id: string;
//   };
// };
// export default async function Home({ params }: Props) {
//   let tracks: TrackType[] = [];
//   let error: string | null = null;
//   try {
//     tracks = await getCollections(params.id);
//   } catch (err: unknown) {
//     error =
//       err instanceof Error
//         ? "Ошибка при загрузке треков. " + err.message
//         : "Неизвестная ошибка";
//   }
//   return (
//     <>
//       <h2 className={styles.sortingHeading}>Треки</h2>
//       <SongList tracks={tracks} />
//       <SongsCollection />
//     </>
//   );
// }
