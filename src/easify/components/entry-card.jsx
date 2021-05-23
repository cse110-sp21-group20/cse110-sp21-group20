/* eslint-disable no-param-reassign */
import styles from '../styles/EntryCard.module.css';
import Row from './row-card';

export default function EntryCard({ entry, entries }) {
  function addRow() {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    entry.rows = [...entry.rows, { id: Date.now() * Math.random(), type: 'hw', text: '' }];
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function updateRow(data, id) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    const rowIndex = entry.rows.findIndex((currRow) => currRow.id === id);
    entry.rows[rowIndex].text = data;
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function deleteEntry() {
    entries.set(entries.val.filter((currE) => currE.id !== entry.id));
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{entry.title}</h1>
      <svg onClick={() => deleteEntry()} className={styles.trashcan} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.2871 3.24297C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871ZM15.8058 17.134C16.1102 14.2971 16.6432 7.55712 16.6432 7.48913C16.6626 7.28313 16.5955 7.08813 16.4623 6.93113C16.3193 6.78413 16.1384 6.69713 15.9391 6.69713H2.06852C1.86818 6.69713 1.67756 6.78413 1.54529 6.93113C1.41108 7.08813 1.34494 7.28313 1.35467 7.48913C1.35646 7.50162 1.37558 7.73903 1.40755 8.13594C1.54958 9.89917 1.94517 14.8102 2.20079 17.134C2.38168 18.846 3.50498 19.922 5.13206 19.961C6.38763 19.99 7.68112 20 9.00379 20C10.2496 20 11.5149 19.99 12.8094 19.961C14.4929 19.932 15.6152 18.875 15.8058 17.134Z" fill="#130F26" />
      </svg>
      <div className={styles.rowwrap}>
        {entry.rows.map((row) => (
          <Row
            updateRow={(data) => updateRow(data, row.id)}
            key={row.id}
            row={row}
          />
        ))}
      </div>
      <button className={styles.addbtn} onClick={() => addRow()} type="button">
        +
      </button>
    </div>
  );
}
