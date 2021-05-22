/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import styles from '../styles/Content.module.css';
import EntryCard from './entry-card';

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
export default function Content({
  entries,
  data,
  changePage,
  year,
  week,
  quarter,
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <button
          className={styles.backbtn}
          type="button"
          onClick={() => changePage()}
        >
          Go Back
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.index} />
        <div className={styles.entrieswrap}>
          {entries.val.map((entry) => (
            <EntryCard key={entry.id} entries={entries} entry={entry} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => entries.set([
            { id: Date.now(), rows: [], title: new Date().toDateString() },
            ...entries.val,
          ])}
          className={styles.addbtn}
        >
          Add Entry
        </button>
      </div>
    </div>
  );
}
