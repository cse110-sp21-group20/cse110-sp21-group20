import { useState } from 'react';

import styles from '../styles/Dash.module.css';
import models from '../models/models';
import YearCard from './year-card';

/**
 * This file will contain all necessary UI+Implementation
 * For the user's dashboard
 * @returns Dash Object
 */
export default function Dash({ data, changePage }) {
  const [showPopup, setShowPopup] = useState(false);
  const [resetJournal, setResetJournal] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <p className={styles.settingsbtn} aria-hidden="true" onClick={() => setShowPopup(!showPopup)}>Settings</p>
          {showPopup ? (
            <div className={styles.popup}>
              <p aria-hidden="true" onClick={() => setResetJournal(!resetJournal)}>
                Reset Journal
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {resetJournal ? (
        <div className={styles.warning}>
          <p>Are You Sure?</p>
          <div className={styles.warnbtnwrap}>
            <p
              aria-hidden="true"
              onClick={() => {
                data.set([]);
                setResetJournal(false);
              }}
            >
              YES
            </p>
            <p id="warnno" aria-hidden="true" onClick={() => setResetJournal(false)}>NO</p>
          </div>
        </div>
      ) : null}
      <div className={resetJournal ? styles.welcomeh : styles.welcome}>
        {/** Order of HTML reversed to accomodate
         * flex-column-reverse property */}
        <h2>Click on a year to get started!</h2>
        <h1>Welcome</h1>
      </div>
      <div className={resetJournal ? styles.mainh : styles.main}>
        {data.val.map((year) => (
          <YearCard
            key={year.id}
            data={year}
            index={data.val.indexOf(year) + 1}
            onClick={() => changePage()}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        onClick={() => data.set([...data.val,
          {
            id: Date.now() * Math.random(),
            year: new Date().getFullYear(),
            q1: models.week,
            q2: models.week,
            q3: models.week,
            q4: models.week,
          }])}
        className={resetJournal ? styles.newyearbtnh : styles.newyearbtn}
      >
        <img src="/icons/plussign.svg" alt="plus sign" />
        <p>Add Year</p>
      </div>

    </div>
  );
}
