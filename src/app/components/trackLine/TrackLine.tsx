"use client";
import Image from "next/image";
import styles from "./trackLine.module.css";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import {
  nextTrack,
  prevTrack,
  setIsPlaying,
  setShuffle,
} from "@/store/features/playlistSlice";
import PlayerLike from "./Player";
import VolumeBar from "./VolumeBar";

const TrackLine = () => {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);

  const isShuffledPlaylist = useAppSelector(
    (state) => state.playlist.isShuffled
  );
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const [currentTimeSong, setCurrentTimeSong] = useState<number>(0);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const sliderClick = useRef<null | HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  function playSong() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      dispatch(setIsPlaying());
    }
  }
  useEffect(() => {
    if (currentTrack) {
      if (!isPlaying) {
        dispatch(setIsPlaying());
      }
      audioRef.current?.play();
    }
  }, [currentTrack]);

  const dispatch = useAppDispatch();
  const handleNext = () => {
    dispatch(nextTrack());
  };
  const handlePrev = () => {
    dispatch(prevTrack());
  };
  const handleShuffle = () => {
    dispatch(setShuffle());
  };
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleNext);
    }
    return () => {
      audioRef.current?.removeEventListener("ended", handleNext);
    };
  }, [currentTrack]);

  function setCurrentTime(currentTime: number, duration: number) {
    setCurrentTimeSong(currentTime);
    setProgress((currentTime / duration) * 100);
  }
  function nextSong() {
    handleNext();
  }
  function prevSong() {
    handlePrev();
  }
  function looping() {
    setIsLoop((isLoop) => !isLoop);
    audioRef.current!.loop = !isLoop;
  }

  const songTimeSlider = useCallback(
    (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
      let slider = sliderClick.current!.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const progress = (offset / slider) * 100;
      audioRef.current!.currentTime =
        (progress / 100) * audioRef.current!.duration;
    },
    []
  );

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolume = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value);
      setVolume(audioRef.current.volume);
    }
  }, []);

  const duration = audioRef.current?.duration;

  const currentMinutes = Math.floor(currentTimeSong / 60);
  const currentSeconds = Math.floor(currentTimeSong % 60);
  const durationMinutes = Math.floor(Number(duration) / 60);
  const durationSeconds = Math.floor(Number(duration) % 60);
  const currentTimeFormatted = `${currentMinutes}:${
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
  }`;
  const durationFormatted = `${durationMinutes}:${
    durationSeconds < 10 ? "0" + durationSeconds : durationSeconds
  }`;

  if (!currentTrack) {
    return null;
  }

  return (
    <div className={styles.bar}>
      <div className={styles.content}>
        <div className={styles.time}>
          <p>
            {currentTimeFormatted} / {durationFormatted}
          </p>
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
                  src="/back.svg"
                  width={14}
                  height={13}
                  alt="back"
                  onClick={prevSong}
                />
              </div>
              <div className={styles.playerControlBtn}>
                {isPlaying ? (
                  <Image
                    onClick={playSong}
                    src="/pause.svg"
                    width={22}
                    height={20}
                    alt="play"
                  />
                ) : (
                  <Image
                    onClick={playSong}
                    src="/play.svg"
                    width={15}
                    height={19}
                    alt="next"
                  />
                )}
              </div>
              <div className={styles.playerControlBtn}>
                <Image
                  src="/nextSong.svg"
                  width={14}
                  height={13}
                  alt="next"
                  onClick={nextSong}
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
                {isShuffledPlaylist ? (
                  <Image
                    src="/shuffleMod.svg"
                    width={19}
                    height={12}
                    alt="shuffle"
                    onClick={handleShuffle}
                  />
                ) : (
                  <Image
                    src="/shuffle.svg"
                    width={19}
                    height={12}
                    alt="shuffle"
                    onClick={handleShuffle}
                  />
                )}
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
                    src={currentTrack?.track_file}
                    ref={audioRef}
                    onTimeUpdate={(e) =>
                      setCurrentTime(
                        e.currentTarget.currentTime,
                        e.currentTarget.duration
                      )
                    }
                  />
                  <p className={styles.albumLink}>{currentTrack?.author}</p>
                </div>
                <div className={styles.album}>
                  <p className={styles.authorLink}>{currentTrack?.name}</p>
                </div>
              </div>

              <div className={styles.likeDislike}>
                <div className={styles.likeBtn}>
                  <PlayerLike track={currentTrack} />
                </div>
                <div className="track-play__dislike _btn-icon"></div>
              </div>
            </div>
          </div>

          <VolumeBar
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
          />
        </div>
      </div>
    </div>
  );
};

export default TrackLine;
