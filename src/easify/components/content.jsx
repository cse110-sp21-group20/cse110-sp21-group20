/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Image from 'next/image';
import Settings from './settings';
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
// eslint-disable-next-line no-unused-vars
export default function Content({ changePage, year, week, quarter, entries, data }) {
  const [resetJournal, setResetJournal] = useState(false);

  return (
    <div className={styles.wrap}>
      {/** HEADER: YEAR, SETTINGS, PROFILE, QUARTERS, PREVIOUS */}
      <div className={styles.topheader}>
        {/* <p className={styles.yearelement}>  INSERT YEAR FROM YEAR CARD HERE </p> */}
        {/* <Settings
          setEntries={entries.set}
          data={{ val: data, set: data.set }}
          rj={resetJournal}
          setrj={() => setResetJournal(!resetJournal)}
          changePage={() => changePage()}
        /> */}
        {/* <button type="button" className={styles.settingsbtn}>
          <span>
            <Image src="/Gear.png" alt="gear" width={14} height={14} />
            Settings
          </span>
        </button> */}
        {/* <button
          type="button"
          id={styles.profilepic}
          className={styles.profilebtn}
        >
          <Image
            src="/Profile.png"
            alt="profile picture"
            width={40}
            height={40}
          />
        </button> */}
      </div>
      <div className={styles.header}>
        <button
          className={styles.backbtn}
          id="wk1"
          type="button"
          onClick={() => changePage()}
        >
          <img src="/icons/larrow.svg" alt="left arrow" />
          <p> Back to previous </p>
        </button>

        {/** QUARTER HEADERS */}
        <div className={styles.quarterheader}>
          {/**
           * TO DO
           * - figure out where buttons lead to
           * - ui of the overall header
           */}
          <button
            type="button"
            onClick={() => quarter.set('q1')}
            className={
              quarter.val === 'q1' ? styles.qtrbtnselect : styles.qtrbtn
            }
          >
            Fall
          </button>
          <button
            type="button"
            onClick={() => quarter.set('q2')}
            className={
              quarter.val === 'q2' ? styles.qtrbtnselect : styles.qtrbtn
            }
          >
            Winter
          </button>
          <button
            type="button"
            onClick={() => quarter.set('q3')}
            className={
              quarter.val === 'q3' ? styles.qtrbtnselect : styles.qtrbtn
            }
          >
            Spring
          </button>
          <button
            type="button"
            onClick={() => quarter.set('q4')}
            className={
              quarter.val === 'q4' ? styles.qtrbtnselect : styles.qtrbtn
            }
          >
            Summer
          </button>
        </div>
        {/* wanted a dotted line at the bottom of the header */}
        <div className="line" />
      </div>
      <div className={styles.main}>
        {/* INDEX OF WEEKS */}
        <div className={styles.index}>
          <button
            className={
              week.val === 'w1' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => {
              week.set('w1');
            }}
          >
            Week 1
          </button>
          <button
            className={
              week.val === 'w2' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => {
              week.set('w2');
            }}
          >
            Week 2
          </button>
          <button
            className={
              week.val === 'w3' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => {
              week.set('w3');
            }}
          >
            Week 3
          </button>
          <button
            className={
              week.val === 'w4' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => week.set('w4')}
          >
            Week 4
          </button>
          <button
            className={
              week.val === 'w5' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => week.set('w5')}
          >
            Week 5
          </button>
          <button
            className={
              week.val === 'w6' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => week.set('w6')}
          >
            Week 6
          </button>
          <button
            className={
              week.val === 'w7' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => week.set('w7')}
          >
            Week 7
          </button>
          <button
            className={
              week.val === 'w8' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => week.set('w8')}
          >
            Week 8
          </button>
          <button
            className={
              week.val === 'w9' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => week.set('w9')}
          >
            Week 9
          </button>
          <button
            className={
              week.val === 'w10' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
            onClick={() => week.set('w10')}
          >
            Week 10
          </button>
          <button
            className={
              week.val === 'w11' ? styles.filledIndexItem : styles.indexItem
            }
            type="button"
          >
            Week 11
          </button>
        </div>
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
          Create New Entry
        </button>
      </div>
    </div>
  );
}
