import styles from "./sorting.module.css";

const Sorting = () => {
    return (
        <div className={styles.sortingBlock}>
        <h2 className={styles.sortingHeading }>Треки</h2>
        <div className={styles.centerblock__filter }>
        <div className={styles.filter__title}>Искать по:</div>
        <div className={styles.filter__btn}>
            исполнителю
        </div>
        <div className={styles.filter__btn}>
            году выпуска
        </div>
        <div className={styles.filter__btn}>жанру</div>
        </div>
    </div>

    )

}

export default Sorting