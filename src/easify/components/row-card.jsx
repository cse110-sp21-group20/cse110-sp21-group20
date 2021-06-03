/* eslint-disable no-nested-ternary */
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Row.module.css';

// eslint-disable-next-line max-len
export default function Row({ row, updateRowText, updateRowType, moveRowForward, updateRowComplete, deleteRow }) {
  const [showPopup, setShowPopup] = useState(false);
  const [rowType, setRowType] = useState(row.type);
  const [rowComplete, setRowComplete] = useState(row.complete);
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

  useEffect(() => {
    updateRowComplete(rowComplete);
  }, [rowComplete]);

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
                <p>Misc.</p>
              </div>
            </div>
            <h2 style={{ marginTop: '0.3rem' }}>BULLET FUNC.</h2>
            <div className={styles.btypewrap}>
              <div aria-hidden="true" onClick={() => moveRowForward()} className={styles.popupentry}>
                <img className={styles.icon} src="/icons/next.svg" alt="next icon" />
                <p>Push Forward</p>
              </div>
              <div aria-hidden="true" onClick={() => setRowComplete(!rowComplete)} className={styles.popupentry}>
                <img className={styles.icon} src="/icons/complete.svg" alt="next icon" />
                <p>Mark Complete</p>
              </div>
              <div aria-hidden="true" onClick={() => deleteRow()} className={styles.popupentry}>
                <img className={styles.icon} src="/icons/trashcan.svg" alt="next icon" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <input style={rowComplete ? { textDecoration: 'line-through' } : null} value={row.text} onInput={(e) => updateRowText(e.target.value)} data-testid='rowInput' />
    </div>
  );
}
