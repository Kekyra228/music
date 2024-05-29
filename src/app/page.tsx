import Main from "./components/main/Main";
import { getTracks } from "./api/userApi";
import { TrackType } from "@/types/types";

export default async function Home() {
  const tracks: TrackType[] = await getTracks();

  return <Main tracks={tracks} />;
}
