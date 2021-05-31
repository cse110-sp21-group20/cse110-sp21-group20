/**
 * @jest-environment jsdom
 */
import React from 'react';

import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

import YearCard from '../components/year-card';
import Settings from '../components/settings';
import Main from '../pages/index';

describe('Dashboard Unit Tests', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('A year displays properly', () => {
    const data = {
      year: new Date().getFullYear()
    };
    render(<YearCard data={data} index={0} onClick={undefined} />);
    const heading = screen.getByText(data.year + '-' + (data.year + 1));
    expect(heading).toBeInTheDocument();
  });
  it('New page starts with no entries', () => {
    render(<Main />);
    const expectedYear = new Date().getFullYear();
    const years = screen.queryAllByText(`${expectedYear}-${expectedYear+1}`);
    expect(years.length).toBe(0);
  });
  it('Clicking on New Year adds a new YearCard', async () => {
    render(<Main />);
    const expectedYear = new Date().getFullYear();
    const yearBefore = screen.queryAllByText(`${expectedYear}-${expectedYear+1}`).length;
    fireEvent.click(screen.getByText(/Add Year/));
    const yearAfter = await waitFor(() => screen.getAllByText(`${expectedYear}-${expectedYear+1}`));
    expect(yearAfter.length).toBe(yearBefore + 1);
  });
  it('Clicking settings button creates dropdown', async () => {
    render(<Main />);
    fireEvent.click(screen.getByText(/Settings/));
    const dropdown = await waitFor(() => screen.getByTestId('dropdown'));
    expect(dropdown).toBeVisible();
  });
  it('Clicking on a year changes state', async () => {
    render(<Main />);
    const expectedYear = new Date().getFullYear();
    fireEvent.click(screen.getByText(`${expectedYear}-${expectedYear+1}`));
    expect(screen.getByText('Create New Entry')).toBeInTheDocument();
  });
  it.todo('Different Year Cards have separate ids');

});

