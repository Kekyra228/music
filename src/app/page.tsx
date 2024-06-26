// import Main from "./components/main/Main";
// import { getTracks } from "./api/userApi";
// import { TrackType } from "@/types/types";

// export default async function Home() {
//   let tracks: TrackType[] = [];
//   let error: string | null = null;
//   try {
//     tracks = await getTracks();
//   } catch (err: unknown) {
//     error =
//       err instanceof Error
//         ? "Ошибка при загрузке треков. " + err.message
//         : "Неизвестная ошибка";
//   }
//   return <Main tracks={tracks} />;
// }
