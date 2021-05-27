/* eslint-disable no-nested-ternary */
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Row.module.css';

export default function Row({ row, updateRowText, updateRowType, moveRowForward }) {
  const [showPopup, setShowPopup] = useState(false);
  const [rowType, setRowType] = useState(row.type);
  const popup = useRef(null);

  /** HIDE DROPDOWN WHEN CLICKED OFF */
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showPopup) return;
    function handleClick(event) {
      if (popup.current && !popup.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    window.addEventListener('click', handleClick);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('click', handleClick);
  }, [showPopup]);

  useEffect(() => {
    updateRowType(rowType);
  }, [rowType]);

  return (
    <div className={styles.row}>
      <div>
        <img
          onClick={() => setShowPopup(!showPopup)}
          aria-hidden="true"
          className={styles.icon}
          src={`/icons/${(rowType === 'hw' ? 'rarrow.svg' : (rowType === 'ex' ? 'star.svg' : 'dots.svg'))}`}
          alt="bullet icon"
        />
        {showPopup ? (
          <div ref={popup} className={styles.popup}>
            <h2>BULLET TYPE</h2>
            <div className={styles.btypewrap}>
              <div aria-hidden="true" onClick={() => setRowType('hw')} className={styles.popupentry}>
                <img className={styles.icon} src="/icons/rarrow.svg" alt="hw icon" />
                <p>Homework</p>
              </div>
              <div aria-hidden="true" onClick={() => setRowType('ex')} className={styles.popupentry}>
                <img className={styles.icon} src="/icons/star.svg" alt="exam icon" />
                <p>Exam</p>
              </div>
              <div aria-hidden="true" onClick={() => setRowType('ms')} className={styles.popupentry}>
                <img className={styles.icon} src="/icons/dots.svg" alt="misc icon" />
                <p>Misc</p>
              </div>
              <div aria-hidden="true" onClick={() => moveRowForward()} className={styles.popupentry}>
                <img className={styles.icon} src="/icons/next.svg" alt="next icon" />
                <p>Move Forward</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <input value={row.text} onInput={(e) => updateRowText(e.target.value)} />
    </div>
  );
}
