/**
 * @jest-environment jsdom
 */

 import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

import Main from '../pages/index';

describe('EntryCard Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });
  it('Entry count starts at 0', () => {
    render(<Main />);
    const expectedYear = new Date().getFullYear();
    fireEvent.click(screen.getByText(`${expectedYear}-${expectedYear+1}`));
    const eLen = screen.queryAllByText(new Date().toDateString()).length;
    expect(eLen).toBe(0);
  });
  it('Create entry adds an entry', async () => {
    render(<Main />);
    const expectedYear = new Date().getFullYear();
    debugger;
    //Click on a specific year
    fireEvent.click(screen.getByText(`${expectedYear}-${expectedYear+1}`));
    const expectedDay = new Date().toDateString();
    const eLenBefore = await waitFor(() => screen.queryAllByText('+'));
    const create = await waitFor(() => screen.getByText(/Create New Entry/));
    fireEvent.click(create);
    const eLenAfter = await waitFor(() => screen.queryAllByText('+'));
    debugger;
    expect(eLenAfter.length).toBe(eLenBefore.length + 1);
  });
  it.todo('Entry shows title properly');
  it.todo('Entry shows 1 bullet content properly');
  it.todo('Entry shows multiple bullet content properly');
});
