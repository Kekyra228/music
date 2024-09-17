import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./trackLine.module.css";
import Image from "next/image";

type Props = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function VolumeBar({ min, max, step, value, onChange }: Props) {
  return (
    <div className={styles.volumeBlock}>
      <div className={styles.volume}>
        <div className={styles.volumeIcon}>
          <Image src="/volume.svg" width={13} height={18} alt="volume" />
        </div>
        <div className={styles.volumeControl}>
          <input
            data-testid="volumeInput"
            className={styles.volumeControlLine}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default VolumeBar;
