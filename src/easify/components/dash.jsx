import { useState } from 'react';

import styles from '../styles/Dash.module.css';
import models from '../models/models';
import YearCard from './year-card';
import Settings from './settings';

/**
 * This file will contain all necessary UI+Implementation
 * For the user's dashboard
 * @returns Dash Object
 */
export default function Dash({ data, changePage }) {
  const [resetJournal, setResetJournal] = useState(false);
  //const [theme, setTheme] = useState(false);

  return (
    <div className={styles.wrap}>
      <Settings
        data={{val: data, set: data.set}}
        rj={resetJournal}
        setrj={() => setResetJournal(!resetJournal)}
      />
      
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
        <img className={styles.plusimg}src="/icons/plussign.svg" alt="plus sign" />
        <p>Add Year</p>
      </div>

    </div>
  );
}
