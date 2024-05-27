"use client";
import { useState } from "react";
import Filter from "../filter/Filter";
import styles from "./sorting.module.css";
import { TrackType } from "@/types/types";

type Props = {
  tracks: TrackType[];
};

const Sorting = ({ tracks }: Props) => {
  // const uniqueAuthors = Array.from(
  //   new Set(tracks.map((track) => track.author))
  // );
  const filterData = [
    {
      title: "исполнителю",
      list: Array.from(new Set(tracks.map((track) => track.author))),
      value: "author",
    },
    {
      title: "году выпуска",
      list: ["По умолчанию", "Сгачала новые", "Сначала старые"],
      value: "release",
    },
    {
      title: "жанру",
      list: Array.from(new Set(tracks.map((track) => track.genre))),
      value: "genre",
    },
  ];
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const handleFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));
  };
  return (
    <div className={styles.sortingBlock}>
      <h2 className={styles.sortingHeading}>Треки</h2>
      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>
        {filterData.map((item, index) => (
          <Filter
            key={index}
            title={item.title}
            list={item.list}
            onClick={handleFilterValue}
            value={item.value}
            isOpen={filterValue === item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Sorting;
