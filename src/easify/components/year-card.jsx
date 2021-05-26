import styles from '../styles/YearCard.module.css';

/**
 * @file This file contains all necessary UI+Implementation
 * for the year cards shown in the dashboard
 * @module Components
 */

/**
 * YearCard. 
 * @returns Content object
 * @author Josh Dreben
 * @name YearCard
 * @function
 * @param data year data
 * @param index year number
 * @param onClick function shows content page
 */
export default function YearCard({ data, index, onClick }) {
  return (
    <button type="button" onClick={() => onClick()} className={styles.card}>
      <p>{`Year ${index}`}</p>
      <h1>{`${data.year}-${data.year + 1}`}</h1>
    </button>
  );
}
