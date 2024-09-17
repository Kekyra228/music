"use client";
import { setFilter } from "@/store/features/playlistSlice";
import styles from "./header.module.css";
import { useAppDispatch } from "@/hooks/store";

const SearchHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.header_container}>
      <div className={styles.centerblock__search}>
        <input
          className={styles.search__input}
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={(e) =>
            dispatch(setFilter({ searchString: e.target.value }))
          }
        />
      </div>
    </div>
  );
};

export default SearchHeader;
