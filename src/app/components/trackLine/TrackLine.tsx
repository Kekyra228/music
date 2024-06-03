"use client";
import Image from "next/image";
import styles from "./trackLine.module.css";
import { useEffect, useRef, useState } from "react";
import { TrackType } from "@/types/types";

type Props = {
  song: TrackType;
};

const TrackLine = ({ song }: Props) => {
  // const [songs, setSongs] = useState<null | TrackType>(tracks);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [song, setsong] = useState(tracks[2]);
  const [currentTimeSong, setCurrentTimeSong] = useState<number>(0);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const sliderClick = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // function timeSong() {
  //   if (audioRef.current === null) {
  //     audioRef.current?.duration === "-";
  //   } else {
  //     formatDuration(audioRef.current?.duration.toFixed());
  //   }
  // }
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  }, [song]);

  function playSong() {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying((prev) => !prev);
  }

  // function durationControl() {
  //   const songDuration = audioRef.current.duration;
  //   const songTime = audioRef.current.currentTime;

  //   // setsong({
  //   //   ...song,
  //   //   progress: (songTime / songDuration) * 100,
  //   //   length: songDuration,
  //   // });
  // }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTimeSong(audioRef.current!.currentTime);
        setProgress(
          (audioRef.current!.currentTime / song.duration_in_seconds) * 100
        );
      });
    }
  }, [song]);

  function looping() {
    setIsLoop((isLoop) => !isLoop);
    audioRef.current.loop = !isLoop;
  }

  function songTimeSlider(e) {
    let slider = sliderClick.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const progress = (offset / slider) * 100;
    audioRef.current.currentTime = (progress / 100) * audioRef.current.duration;
  }

  function nextSong() {
    // if (song < songs.length - 1) {
    //   setsong(song + 1);
    // } else {
    //   setsong(songs[0]);
    // }
    // audioRef.current.curretTime = 0;
  }
  function error() {
    alert("Еще не реализовано");
  }
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className={styles.bar}>
      <div className={styles.content}>
        <div className={styles.time}>
          <p>
            время песни:{formatDuration(audioRef.current?.duration.toFixed())}
          </p>
          <p>уже прошло: {formatDuration(currentTimeSong.toFixed())}</p>
        </div>
        <div
          className={styles.playerProgressContain}
          onClick={songTimeSlider}
          ref={sliderClick}
        >
          <div
            className={styles.playerProgress}
            style={{ width: `${progress + "%"}` }}
          ></div>
        </div>
        <div className={styles.playerBlock}>
          <div className={styles.player}>
            <div className={styles.playerControl}>
              <div className={styles.playerControlBtn}>
                <Image
                  // onClick={backSong}
                  src="/back.svg"
                  width={14}
                  height={13}
                  alt="back"
                  onClick={error}
                />
              </div>
              <div className={styles.playerControlBtn}>
                {isPlaying ? (
                  <Image
                    onClick={playSong}
                    src="/play.svg"
                    width={22}
                    height={20}
                    alt="play"
                  />
                ) : (
                  <Image
                    onClick={playSong}
                    src="/pause.svg"
                    width={15}
                    height={19}
                    alt="next"
                  />
                )}
              </div>
              <div className={styles.playerControlBtn}>
                <Image
                  onClick={nextSong}
                  src="/nextSong.svg"
                  width={14}
                  height={13}
                  alt="next"
                  onClick={error}
                />
              </div>
              <div className={styles.playerControlBtn} onClick={looping}>
                {isLoop ? (
                  <Image
                    src="/repeatUsed.svg"
                    width={18}
                    height={12}
                    alt="repeatUsed"
                  />
                ) : (
                  <Image
                    src="/repeat.svg"
                    width={18}
                    height={12}
                    alt="repeat"
                  />
                )}
              </div>
              <div className={styles.playerControlBtn}>
                <Image
                  src="/shuffle.svg"
                  width={19}
                  height={12}
                  alt="shuffle"
                  onClick={error}
                />
              </div>
            </div>

            <div className={styles.playerTrack}>
              <div className={styles.playerTrackContain}>
                <div className={styles.playerImage}>
                  <Image
                    src="/songIcon.svg"
                    width={51}
                    height={51}
                    alt="next"
                  />
                </div>
                <div className={styles.author}>
                  <audio
                    src={song?.track_file}
                    ref={audioRef}
                    // onTimeUpdate={durationControl}
                  />
                  <p className={styles.albumLink}>{song?.author}</p>
                </div>
                <div className={styles.album}>
                  <p className={styles.authorLink}>{song?.name}</p>
                </div>
              </div>

              <div className={styles.likeDislike}>
                <div className={styles.likeBtn}>
                  <Image src="/like.svg" width={14} height={12} alt="next" />
                </div>
                <div className="track-play__dislike _btn-icon">
                  {/* <svg className="track-play__dislike-svg">
                      <use
                        xlink:href="img/icon/sprite.svg#icon-dislike"></use>
                    </svg> */}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.volumeBlock}>
            <div className={styles.volume}>
              <div className={styles.volumeIcon}>
                <Image src="/volume.svg" width={13} height={18} alt="next" />
              </div>
              <div className={styles.volumeControl}>
                <input
                  className={styles.volumeControl}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackLine;
