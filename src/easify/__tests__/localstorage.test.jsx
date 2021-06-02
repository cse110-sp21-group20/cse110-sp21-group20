/**
 * @jest-environment jsdom
 */
import { cleanup, findByAltText, findByDisplayValue, findByTestId, fireEvent, getByAltText, getByDisplayValue, getByTestId, queryByDisplayValue, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import Main from '../pages/index'
//Data format
const yearTemplate = {
  id: expect.anything(),
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
const expectedYear = new Date().getFullYear();
const today = new Date().toDateString();
describe('Local Storage Unit Tests', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  })

  it('On startup, new year is serialized', () => {
    render(<Main />);
    expect(localStorage.length).toBe(1);
    expect(JSON.parse(localStorage.getItem('data'))['0']).toEqual(expect.objectContaining(yearTemplate));
  });
  it('Entry serialization', async () => {
    //Adding an entry
    const { getByText, findByText, findByDisplayValue, getByAltText } = render(<Main />);
    fireEvent.click(getByText(`${expectedYear}-${expectedYear+1}`));
    const newEntryBtn = await findByText('Create New Entry');
    fireEvent.click(newEntryBtn);
    const data1 = JSON.parse(localStorage.getItem('data'))['0'];
    const title = await findByDisplayValue(today);
    expect(data1.q1.w1.length).toBe(1);
    //Deleting the entry
    fireEvent.click(getByAltText('delete'));
    waitForElementToBeRemoved(() => title);
    const data2 = JSON.parse(localStorage.getItem('data'))['0'];
    expect(data2.q1.w1.length).toBe(0);
  });
  it('Bullets are saved with the appropriate type', async () => {
      //Adding an entry
      const { getByText, findByText, findByDisplayValue, getByTestId, findByAltText } = render(<Main />);
      fireEvent.click(await findByText(`${expectedYear}-${expectedYear+1}`));
      const newEntryBtn = await findByText('Create New Entry');
      fireEvent.click(newEntryBtn);
      const title = await findByDisplayValue(today);
      const entryCard = title.parentElement;
      //Adding a bullet
      const addRow = getByText('+');
      fireEvent.click(addRow);
      const bulletIcon = await findByAltText('bullet icon');
      const data1 = JSON.parse(localStorage.getItem('data'))['0'];
      expect(data1.q1.w1[0].rows.length).toBe(1);
      //Changing bullet text
      const testText = 'hello world!';
      const rowContent = getByTestId('rowInput');
      fireEvent.input(rowContent, {target: {value: testText}});
      expect(rowContent.value).toBe(testText);
      const data2 = JSON.parse(localStorage.getItem('data'))['0'];
      expect(data2.q1.w1[0].rows[0].text).toBe(testText);
      //Changing the bullet type
      const bulletType = 'ex';
      fireEvent.click(bulletIcon);
      const examBtn = await findByText('Exam');
      fireEvent.click(examBtn);
      const data3 = JSON.parse(localStorage.getItem('data'))['0'];
      expect(data3.q1.w1[0].rows[0].type).toBe(bulletType);
  });
});