/** GET RID OF LINE BELOW WHEN DATA IS REAL */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styles from '../styles/Main.module.css';
import models from '../models/models';
import Dash from '../components/dash';
import Content from '../components/content';

/**
 * @file This file will contain the necessarry UI+Implementation
 * for the index page of the web-app, either showing the
 * dashboard or main year/quarter/week content page
 * @module Pages
 */

/**
 * @todo Needs a description.
 * @returns Index Page Object
 * @author Josh Dreben
 * @name Main
 * @function
 */
export default function Main() {
  /** @todo FAKE DATA FOR DEBUG PURPOSES */

  const [showContent, setShowContent] = useState(false);

  /** FULL DATA FROM */
  const [data, setData] = useState([]);

  /** STATE USED TO LOOK UP SPECIFIC WEEK OF ENTRIES */
  const [currYear, setCurrYear] = useState(0);
  const [currQuarter, setCurrQuarter] = useState('q1');
  const [currWeek, setCurrWeek] = useState('w1');

  /** CURRENT ENTRIES */
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const oldData = localStorage.getItem('data');
    if (oldData && JSON.parse(oldData).length > 0) {
      setData(JSON.parse(oldData));
      setEntries(JSON.parse(oldData)[currYear][currQuarter][currWeek]);
    } else {
      const newYear = {
        id: Date.now() * Math.random(),
        year: new Date().getFullYear(),
        q1: {
          w1:  [],
          w2:  [],
          w3:  [],
          w4:  [],
          w5:  [],
          w6:  [],
          w7:  [],
          w8:  [],
          w9:  [],
          w10: [],
        },
        q2: {
          w1:  [],
          w2:  [],
          w3:  [],
          w4:  [],
          w5:  [],
          w6:  [],
          w7:  [],
          w8:  [],
          w9:  [],
          w10: [],
        },
        q3: {
          w1:  [],
          w2:  [],
          w3:  [],
          w4:  [],
          w5:  [],
          w6:  [],
          w7:  [],
          w8:  [],
          w9:  [],
          w10: [],
        },
        q4: {
          w1:  [],
          w2:  [],
          w3:  [],
          w4:  [],
          w5:  [],
          w6:  [],
          w7:  [],
          w8:  [],
          w9:  [],
          w10: [],
        },
      };
      setData([newYear]);
      localStorage.setItem('data', JSON.stringify([newYear]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    if (data.length === 0) {
      setEntries([]);
    } else {
      setEntries(data[currYear][currQuarter][currWeek]);
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const newData = data;
      newData[currYear][currQuarter][currWeek] = [...entries];
      localStorage.setItem('data', JSON.stringify(newData));
    }
  }, [entries]);

  useEffect(() => {
    // console.log(currYear, currQuarter, currWeek);
    if (data.length > 0) {
      const showEntries = data[currYear][currQuarter][currWeek];
      if (showEntries) {
        setEntries(showEntries);
      }
    }
  }, [currYear, currQuarter, currWeek]);

  return (
    <div className={styles.container}>
      {showContent ? (
        <Content
          data={{ val: data, set: setData }}
          entries={{ val: entries, set: setEntries }}
          year={{ val: currYear, set: setCurrYear }}
          quarter={{ val: currQuarter, set: setCurrQuarter }}
          week={{ val: currWeek, set: setCurrWeek }}
          changePage={() => setShowContent(false)}
        />
      ) : (
        <Dash
          data={{ val: data, set: setData }}
          changePage={() => setShowContent(true)}
          setYear={setCurrYear}
        />
      )}
    </div>
  );
}
