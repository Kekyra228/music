import Navbar from "@/app/components/navbar/Navbar";
import styles from "./homeCollection.module.css";
import SongsCollection from "@/app/components/collection/SongsCollection";
import TrackLine from "@/app/components/trackLine/TrackLine";

export default function SongsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.centerblock__content}>{children}</div>
        </main>
      </div>
    </div>
  );
}
