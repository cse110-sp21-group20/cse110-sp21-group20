/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import EntryCard from '../components/entry-card';
import Main from '../pages/index';

const expectedYear = new Date().getFullYear();
const today = new Date().toDateString();
describe('EntryCard Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });
  it('Entry count starts at 0', () => {
    render(<Main />);
    fireEvent.click(screen.getByText(`${expectedYear}-${expectedYear + 1}`));
    const eLen = screen.queryAllByText(today).length;
    expect(eLen).toBe(0);
  });
  it('Create entry adds an entry', async () => {
    render(<Main />);
    // Click on a specific year
    fireEvent.click(screen.getByText(`${expectedYear}-${expectedYear + 1}`));
    const eLenBefore = await waitFor(() => screen.queryAllByText('+'));
    const create = await waitFor(() => screen.getByText(/Create New Entry/));
    fireEvent.click(create);
    const eLenAfter = await waitFor(() => screen.queryAllByText('+'));
    expect(eLenAfter.length).toBe(eLenBefore.length + 1);
  });
  it('Entry shows title properly', () => {
    const testEntry = {
      title: 'Test title',
      rows: [],
    };
    const testEntries = {
      val: [{ testEntry }],
      set: () => {},
    };
    const { getByDisplayValue } = render(<EntryCard entry={testEntry} entries={testEntries} />);
    const entryCard = getByDisplayValue(testEntry.title);
    expect(entryCard).toBeInTheDocument();
  });
  it('Entry shows each bullet content type properly', () => {
    const testEntry = {
      title: 'Test title',
      rows: [
        {
          id: 'id_1',
          text: 'test text 1',
          type: 'hw',
          rowComplete: true,
        },
        {
          id: 'id_2',
          text: 'test text 2',
          type: 'ex',
          rowComplete: true,
        },
        {
          id: 'id_3',
          text: 'test text 3',
          type: 'misc',
          rowComplete: true,
        },
      ],
    };
    const testEntries = {
      val: [testEntry],
      set: () => {}, // BYPASS SET REQUIREMENT
    };
    // eslint-disable-next-line max-len
    const { getByDisplayValue, getAllByAltText } = render(<EntryCard entries={testEntries} entry={testEntry} />);
    const entryCard = getByDisplayValue(testEntry.title).parentElement;
    expect(entryCard).toBeInTheDocument(); // card is in the doc
    const bullet1 = getByDisplayValue(testEntry.rows[0].text).parentElement;
    const bullet2 = getByDisplayValue(testEntry.rows[1].text).parentElement;
    const bullet3 = getByDisplayValue(testEntry.rows[2].text).parentElement;
    expect(bullet1).toBeInTheDocument();
    expect(bullet2).toBeInTheDocument();
    expect(bullet3).toBeInTheDocument();
    const bullets = getAllByAltText('bullet icon');
    expect(bullets.length).toBe(testEntry.rows.length);
    expect(bullets[0].src).toEqual(expect.stringContaining('/icons/rarrow.svg'));
    expect(bullets[1].src).toEqual(expect.stringContaining('/icons/star.svg'));
    expect(bullets[2].src).toEqual(expect.stringContaining('/icons/dots.svg'));
  });
});
