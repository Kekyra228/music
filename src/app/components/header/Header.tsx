import styles from "./header.module.css";

const SearchHeader = () => {
    return (
      <div className={styles.header_container}>
        <div className={styles.centerblock__search}>
        <input
          className={styles.search__input}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>

      </div>
    )
}

export default SearchHeader