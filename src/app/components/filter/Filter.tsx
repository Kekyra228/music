import { useAppDispatch } from "@/hooks/store";
import styles from "./filter.module.css";
import { clsx } from "clsx";
import { setFilter } from "@/store/features/playlistSlice";

type Props = {
  title: string;
  list: string[] | number[];
  onClick: (value: string) => void;
  value: string;
  isOpen: boolean;
  selected: string[];
};

const Filter = ({
  title,
  list,
  onClick,
  value,
  isOpen,
  selected = [],
}: Props) => {
  const dispatch = useAppDispatch();
  const toggleFiler = (item: string) => {
    if (value === "release") {
      dispatch(setFilter({ orderSorting: item }));
      return;
    }
    dispatch(
      setFilter({
        [value]: selected.includes(item)
          ? selected.filter((el) => el !== item)
          : [...selected, item],
      })
    );
  };
  return (
    <div>
      <button
        className={clsx(styles.filterBtn, {
          [styles.filterBtnActive]: isOpen,
        })}
        onClick={() => onClick(value)}
      >
        {selected.length > 0 && value !== "release" ? (
          <div className={styles.filterCount}>{selected.length}</div>
        ) : null}
        {title}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li
              className={styles.listItem}
              key={index}
              onClick={() => toggleFiler(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
