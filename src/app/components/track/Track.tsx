"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./track.module.css";
import { formatDuration } from "@/utils/formatDuration";
import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import { useLikeTrack } from "@/hooks/likes";

type Props = {
  track: TrackType;
  tracks: TrackType[];
};

const Track = ({ track, tracks }: Props) => {
  const { isLiked, handleLike } = useLikeTrack({ track });
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const dispatch = useAppDispatch();
  const { name, author, album, duration_in_seconds } = track;
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isCurrentTrack = currentTrack?.id === track.id;

  function playSong() {
    if (currentTrack) {
      if (isPlaying) {
        !currentTrack;
      } else {
        isPlaying;
      }
      dispatch(setIsPlaying());
    }
  }
  return (
    <div
      onClick={() => dispatch(setCurrentTrack({ currentTrack: track, tracks }))}
      className={styles.playlistItem}
    >
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleIcon}>
            <div className={styles.trackIcon}>
              {isCurrentTrack ? (
                isPlaying ? (
                  <span className={styles.roundWithPulse} />
                ) : (
                  <span className={styles.roundNotPulse} />
                )
              ) : (
                <Image src="/songIcon.svg" width={51} height={51} alt="icon" />
              )}
            </div>
          </div>
          <div className={styles.trackTitle}>
            <a className={styles.trackTitleLink} href="http://">
              {name} <span className="track__title-span"></span>
            </a>
          </div>
        </div>

        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            {author} <span className="track__title-span"></span>
          </a>
        </div>

        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="http://">
            {album}
            <span className="track__title-span"></span>
          </a>
        </div>

        <div className={styles.trackTime}>
          <div className={styles.trackTimeLike} onClick={handleLike}>
            {isLiked ? (
              <Image
                src="/activeLike.svg"
                width={14}
                height={12}
                alt="activelike"
              />
            ) : (
              <Image src="/like.svg" width={14} height={12} alt="like" />
            )}
          </div>
          <span className={styles.trackTimeText}>
            {formatDuration(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
