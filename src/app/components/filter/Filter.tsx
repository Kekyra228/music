import styles from "./filter.module.css";
import { clsx } from "clsx";

type Props = {
  title: string;
  list: string[] | number[];
  onClick: (value: string) => void;
  value: string;
  isOpen: boolean;
};

const Filter = ({ title, list, onClick, value, isOpen }: Props) => {
  return (
    <div>
      <button
        className={clsx(styles.filterBtn, {
          [styles.filterBtnActive]: isOpen,
        })}
        onClick={() => onClick(value)}
      >
        {title}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.listItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
