import styles from '../styles/Content.module.css';

/**
 * @file This file will contain all necessary UI+Implementation 
 * for the main content of the web-app
 * @module Content
 */

/**
 * Content of the web-app
 * @returns Content object
 * @author Josh Dreben
 * @name Content
 * @function
 */
/* DELETE LINE BELOW WHEN YEAR, WEEK, AND QUARTER ARE ALL BEING USED */
// eslint-disable-next-line no-unused-vars
export default function Content({ changePage, year, week, quarter }) {

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.backbtn} id="wk1" type="button" onClick={() => changePage()}>
          Go Back
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.index}>
          {/*all week buttons currently just go back to previous page */}
        <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 1
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 2
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 3
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 4
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 5
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 6
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 7
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 8
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 9
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 10
          </button>
          <button className={styles.indexItem} type="button" onClick={() => changePage()}>
            Week 11
          </button>
        </div>
      </div>
    </div>
  );
}
