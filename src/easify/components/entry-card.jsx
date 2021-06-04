/* eslint-disable no-param-reassign */
import styles from '../styles/EntryCard.module.css';
import Row from './row-card';
/**
 * entry:
 * {
 *   title: String
 *   rows: [
 *     {
 *       text: String,
 *       type: String (1 of: ['hw', 'ex', {misc}]),
 *       rowComplete: Bool
 *     },...
 *   ]
 * }
 * entries:
 * {
 *    val: [
 *      {entry}
 *    ],
 *    set: function ()
 * }
 */
export default function EntryCard({ entry, entries }) {
  function addRow() {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    entry.rows = [...entry.rows, { id: Date.now() * Math.random(), type: 'hw', text: '', complete: false }];
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function updateRowText(data, id) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    const rowIndex = entry.rows.findIndex((currRow) => currRow.id === id);
    entry.rows[rowIndex].text = data;
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function updateRowType(data, id) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    const rowIndex = entry.rows.findIndex((currRow) => currRow.id === id);
    entry.rows[rowIndex].type = data;
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function moveRowForward(id) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    const rowObject = entry.rows[entry.rows.findIndex((currRow) => currRow.id === id)];
    if (index === 0) {
      return;
    }
    const prevEntry = entries.val[index - 1];
    entry.rows = entry.rows.filter((currRow) => currRow.id !== id);
    prevEntry.rows.push(rowObject);
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    newEntries[index - 1] = prevEntry;
    entries.set(newEntries);
  }

  function deleteRow(id) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    entry.rows = entry.rows.filter((currRow) => currRow.id !== id);
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function updateRowComplete(data, id) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    entry.rows[entry.rows.findIndex((currRow) => currRow.id === id)].complete = data;
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function updateEntryTitle(data) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    entry.title = data;
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function deleteEntry() {
    entries.set(entries.val.filter((currE) => currE.id !== entry.id));
  }

  return (
    <div className={styles.card}>
      <input
        className={styles.title}
        value={entry.title}
        onInput={(e) => updateEntryTitle(e.target.value)}
      />
      <img aria-hidden="true" onClick={() => deleteEntry()} className={styles.trashcan} src="/icons/trashcan.svg" alt="delete" />
      <div className={styles.rowwrap}>
        {entry.rows.map((row) => (
          <Row
            updateRowText={(data) => updateRowText(data, row.id)}
            updateRowType={(data) => updateRowType(data, row.id)}
            moveRowForward={() => moveRowForward(row.id)}
            deleteRow={() => deleteRow(row.id)}
            updateRowComplete={(data) => updateRowComplete(data, row.id)}
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
