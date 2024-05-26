import { getTracks } from "@/app/api/userApi";
import styles from "./filter.module.css";
import { TrackType } from "@/types/types";
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
      <button className={styles.filterBtn} onClick={() => onClick(value)}>
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
