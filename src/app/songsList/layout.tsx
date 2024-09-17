import { TrackType } from "@/types/types";
import SongsCollection from "../components/collection/SongsCollection";
import Navbar from "../components/navbar/Navbar";
import TrackLine from "../components/trackLine/TrackLine";
import styles from "./layout.module.css";

type Props = {
  track: TrackType;
};
export default function SongsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar />
          <div className={styles.centerblock__content}>{children}</div>
          <SongsCollection />
        </main>
        <TrackLine />
      </div>
    </div>
  );
}
